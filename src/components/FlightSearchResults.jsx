import React from 'react';
import '../App.css';
import FlightSearch from './FlightSearch';
import axios from 'axios';

const RAILS_FLIGHTS_BASE_URL = 'http://localhost:3000/flights/json';

// function flightItem (props){
//     return(
//         <td>{props.flight.flight}</td>
//         <td>{props.flight.departure_date}</td>
//         <td>{props.flight.origin}</td>
//         <td>{props.flight.destination}</td>
//         <td>{props.flight.plane_id}</td>
//         <td>{props.flight.seats}</td>
//     )

// }

class FlightSearchResults extends React.Component {

    state = {
        flights: [], // storesresults from API for render
        loading: true, // whether os not it's loading
        error: null

    }

    componentDidMount(){
        console.log('componentDidMount()');
        this.fetchFlights();

        //Poll the server every 2s to get any secrets that were added by other users since the page loaded (or since the last poll)
        // setInterval(this.fetchFlights, 2000)
    }

    fetchFlights = async () => {
        try{
            const res = await axios.get(RAILS_FLIGHTS_BASE_URL)
            console.log('response:', res.data);
            this.setState({
                flights: res.data, 
                loading: false
            });
        } catch(err){
            console.error('Error loading secrects from API', err);
            this.setState({
                loading: false,
                error: err
            })
        }//catch
        
    } // fetchSecrets()


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

            </div>

        )

    }

} // class FlightSearchResults

export default FlightSearchResults;