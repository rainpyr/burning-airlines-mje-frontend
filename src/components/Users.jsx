import axios from 'axios';
import React from 'react';
const RAILS_USERS_BASE_URL = 'http://localhost:3000/users'


class Users extends React.Component{

    state ={
        users: [],
        loading: true,
        error: null
    }

    componentDidMount(){
        // We want to load the Users data
        console.log('componentDidMount for users()');
        this.fetchUsers();
    
    } // Mount

    fetchUsers = async () => {

        try{
            const res = await axios.get(RAILS_USERS_BASE_URL);
            console.log('Users:', res.data)

            this.setState({
                users: res.data,
                loading: false
            });

        } // try
        catch( err ){
            console.log('Error Loading secrets from API', err);

            this.setState({
                loading: false,
                error: err // Store the required information for the render
            });
        }

    } // fetch



    render(){

        return (

            <div className="Users">
                <h1>User Index Page</h1>
                <ul>
                {
                    this.state.users.map( u => <li>{u.name}</li>)
                }
                </ul>
            </div>

        ) // return

    } // render

} // class

export default Users;