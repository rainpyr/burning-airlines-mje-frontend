import axios from 'axios';
import React from 'react';
const RAILS_RESERVATIONS_BASE_URL = 'http://localhost:3000/reservations';


class Reservations extends React.Component{

    state ={
        reservations: [],
        loading: true,
        error: null
    }

    componentDidMount(){
        // We want to load the Reservations data
        console.log('componentDidMount for reservation()');
        this.fetchReservations();
    
    } // Mount

    fetchReservations = async () => {

        try{
            const res = await axios.get(RAILS_RESERVATIONS_BASE_URL);
            console.log('reservations:', res.data)

            this.setState({
                reservations: res.data,
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

            <div className="Reservation">
                <h1>User Reservation Page</h1>
                <ul>
                {
                this.state.reservations.map ( r => <li>Flight Id: {r.flight_id} <br /> User Id:{r.user_id} <br /> Seat #: {r.seat_number}</li>)
                }
                </ul>
            </div>

        ) // return

    } // render

} // class

export default Reservations;