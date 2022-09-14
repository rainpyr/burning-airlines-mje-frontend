import React from 'react';
import axios from 'axios';

const RAILS_PLANE_BASE_URL = 'http://localhost:3000/plane/json'

class FlightReservation extends React.Component {

    

    getSeatingDiagram = (id) => {
        axios.get( RAILS_PLANE_BASE_URL, {
            params:{
                id: id
            }
        })
        .then( res => {
            console.log(res.data);
        })
        .catch( err => {
            console.log(err);
        })
    }

    componentDidMount(){
        this.getSeatingDiagram(22)
    }
    

    render(){

        return (
            <div>
                <h2>Select seats for reservation</h2>

            </div>
        );

    }

}

export default FlightReservation

