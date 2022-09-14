import React from 'react';
import '../App.css';
import FlightSearch from './FlightSearch';
import axios from 'axios';

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
        .catch( err => {
            
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
            <div className="">
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
                {/* {this.state.flights.map( f =>
                // <FlightItem key={f.id} flight={f} />
                )} */}
                
                
                </table>
                }
                {
                    this.state.flights.map( f => <p>Flight Number: {f.flight}, Flight Destination: {f.destination}</p>)
                }

            </div>

        )

    }

} // class FlightSearchResults

export default FlightSearchResults;