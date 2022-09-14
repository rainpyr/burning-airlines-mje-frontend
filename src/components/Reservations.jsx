import axios from 'axios';
import React from 'react';
const RAILS_RESERVATIONS_BASE_URL = 'http://localhost:3000/reservations';


class Reservations extends React.Component{

    componentDidMount(){
        // We want to load the Reservations data
        console.log('componentDidMount')


    }

    render(){

        return (

            <div className="Reservation">
                <h1>User Reservation Page</h1>
            </div>

        ) // return

    } // render

} // class

export default Reservations;