import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Table = (props) => {
    const putRows = () => (
        props.users.map((user, key) => (
          <tbody className="row" key={user.id}>
                <tr >
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
                <td>
                    <Link to={`/publications/${key}`}>
                        <div className="eye-solid icon"></div>
                    </Link>
                </td>
                </tr>
            </tbody>
        ))
      );

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Link</th>
                        <th>Id</th>
                    </tr>
                </thead>
                <tbody>
                    {putRows()}
                </tbody>
            </table>
        </div>
    );
};

const mapStateToProps = (reducers) => {
    return reducers.usersReducer;
}

export default connect(mapStateToProps)(Table);