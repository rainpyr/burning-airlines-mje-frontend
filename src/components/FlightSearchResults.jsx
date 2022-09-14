import React from 'react';
import '../App.css';
import FlightSearch from './FlightSearch';
import axios from 'axios';
import { Route, HashRouter as Router, Link } from 'react-router-dom'

// const RAILS_FLIGHTS_BASE_URL = 'http://localhost:3000/flights/:destination/json';

class FlightSearchResults extends React.Component {

    state = {
        flights: [], // storesresults from API for render
        loading: true, // whether os not it's loading
        error: null
    }

    
    getFlightsWithDestination = (origin, destination) => {
        axios.get( `http://localhost:3000/flights/${origin}/${destination}` )
        .then( res => {
            console.log(`resultFlights:`, res.data); 
            this.setState({flights: res.data})
            
        })
        .catch( err => {console.error('Loading error: ', err)
            
        })
    }
    
    componentDidMount(){
        console.log('componentDidMount()');
        this.getFlightsWithDestination(this.props.match.params.origin ,this.props.match.params.destination)
    }

    render(){

        if(this.state.error !== null){
            return <p>There was an error loading flights</p>;
        }

        return (
            <div>

                <h3>Your Search Results</h3>

                {
                <table>
                <tr>
                    <th>Flight</th>
                    <th>Date</th>
                    <th>Origin</th>
                    <th>Destination</th>
                    <th>Plane</th>
                    <th>Remaining Seats</th>
                </tr>
                 
                <Link to='/flightreservations'> 
                    {this.state.flights.map( f => 
                   <tr> 
                    <td> {f.flight} </td>
                    <td>{f.departure_date}</td>
                    <td>{f.origin}</td>
                    <td>{f.destination}</td>
                    <td>{f.plane_id}</td>
                    <td>{f.seats}</td>
                    </tr>
                    )}
                </Link>
                 
            
            </table>
            }
            </div>

        )

    }

} // class FlightSearchResults

export default FlightSearchResults;