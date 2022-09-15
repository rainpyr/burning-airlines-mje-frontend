
import axios from 'axios';
import React from 'react';
import Users from './Users';



class UserSearch extends React.Component{


    state ={
        searchText: '', // this needs to be defined in the parent (Home.js) and passed down as a prop.
  
    }
    checkUser = (user) =>{
        console.log(user);
    }


    render(){

        console.log('this is props:', this.props);
      

        return (

                   <div className="Search">
                    <div>
                        <p>Welcome user: {(this.state.searchText)}</p>

                    </div>
                   
            
            </div>

        ) // return

    } // render

} // class

export default UserSearch;