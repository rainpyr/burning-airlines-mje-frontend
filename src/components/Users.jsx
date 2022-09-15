import axios from 'axios';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import UserSearch from './UserSearch';
const RAILS_USERS_BASE_URL = 'http://localhost:3000/users'

// const PropsPage = () =>{
//     return(
//         <h2>{title}</h2>
//     )
// }

class Users extends React.Component{

    // [bro] = useState();
    state ={
        searchText: '', // this needs to be defined in the parent (Home.js) and passed down as a prop.
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

    handleInput = (event) =>{
        this.setState({ searchText: event.target.value})
        // this.setState(event.target.value)
    }

    submitSearch = (event) => {
        event.preventDefault();
        const currentUser = this.state.searchText;
        this.setState({ currentUser: currentUser });
        // this.props.checkUser
        console.log(currentUser);
        this.props.notifyParent(this.state.searchText);
        // this.props.renderUser(currentUser);

    }

    render(){

        console.log('this is props:', this.props);
      

        return (
            
          
            <div className="Users">


                <div className="Search">
                    <div>
                        {/* <p><UserSearch text={this.state.searchText} /></p> */}

                    </div>
                   
                    <h3>Select User</h3>
                     <input type="text" onChange={this.handleInput} placeholder="Search User"/> <button onClick={this.submitSearch}>Submit </button> 
                     <h2>{this.state.searchText}</h2>

                </div>
                {/* <div className="All-users">
                <h3>All User Accounts</h3>
                <ul>
                {
                this.state.users.map( u => <li>{u.name}</li>)
                }
                </ul>
                </div> */}
            </div>

      

        ) // return

    } // render

} // class

export default Users;