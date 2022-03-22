import React, { useEffect } from "react";
import { useParams } from "react-router";
import { connect } from 'react-redux';


import * as usersActions from '../../actions/usersActions';
import * as publicationsActions from '../../actions/publicationsActions';

const { getAll: usersGetAll } = usersActions;
const { getByUser: publicationsGetByUser} = publicationsActions;

const Publications = (props) => {
  const params = useParams();
  
  useEffect(() => {
    if(!props.usersReducer.users.length) {
      usersGetAll();
    }
    publicationsGetByUser();
  });
  console.log(props)

  return (
    <div>
      <h1>Plublication of</h1>
      <h2> {params.key}</h2>
    </div>
  );
};

const mapStateToProps = ({ usersReducer, publicationsReducer }) => {
  return { 
    usersReducer, 
    publicationsReducer
  };
};

const mapDispatchToProps = {
  ...usersGetAll,
  ...publicationsGetByUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(Publications);