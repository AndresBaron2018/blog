import React, { Component } from "react";
import { connect } from 'react-redux';
import Spinner from '../General/Spinner';

import * as usersActions from '../../actions/usersActions';

class Users extends Component {
  
  async componentDidMount() {
      this.props.getAll();
    }

    putContent = () => {
      if (this.props.loading) { 
          return (
            <Spinner />
          );
      }
      return (
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            { this.putRows() }
          </tbody>
        </table>
      );
    }

  putRows = () => (
    this.props.users.map((user) => (
      <div className="row">
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.website}</td>
        </tr>
    </div>
    ))
    )
    render () {
      return (
        <div>
          { this.putContent()}
        </div>
    );
  }
}

const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
};

export default connect(mapStateToProps, usersActions)(Users);