import React, { Component } from "react";
import { connect } from 'react-redux';
import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';
import Table from './Table';

import * as usersActions from '../../actions/usersActions';

class Users extends Component {
  
  async componentDidMount() {
      if(!this.props.users.length) {
        this.props.getAll();
      }
    }

    putContent = () => {
      if (this.props.loading) { 
          return (
            <Spinner />
          );
      }

      if (this.props.error) {
        return <Fatal message={ this.props.error } />;
      }

      return <Table />;
    }

 
    render () {
      return (
        <div>
          <h1>Users</h1>
          { this.putContent() }
        </div>
    );
  }
}

const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
};

export default connect(mapStateToProps, usersActions)(Users);