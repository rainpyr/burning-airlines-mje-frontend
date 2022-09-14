import axios from 'axios';
import React from 'react';
const RAILS_USERS_BASE_URL = 'http://localhost:3000/users'


class Users extends React.Component{


    render(){

        return (

            <div className="Users">
                <h1>User Index Page</h1>
            </div>

        ) // return

    } // render

} // class

export default Users;