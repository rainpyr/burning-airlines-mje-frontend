import React from 'react';
import axios from 'axios';
import '../Seats.css'

class FlightReservation extends React.Component {

    state = { 
        flightNum: '',
        departFrom: '',
        arriveAt: '',
        planeName: '',
        planeRowsArray: [],
        planeColsArray: [],
    }
    
    arrayRow = (num) => {
        let arr = []
        for (let i = 1; i < num + 1; i++) {
            arr.push(i)
        }
        return arr
    }

    arrayCol = (num) => {
        // remind me to comment or ask Luke this as this is very magical
        let arr = Array.from(Array(num)).map((e, i) => i + 65);
        let arrAlphabet = arr.map((x) => String.fromCharCode(x));
        return arrAlphabet
    }

    getSeatingDiagram = (id) => {
        axios.get( `http://localhost:3000/flights/${id}`)
        .then( res => {
            console.log(res.data.plane.rows);
            console.log(res.data.plane.cols);
            this.setState({flightNum: res.data.flight})
            this.setState({departFrom: res.data.origin})
            this.setState({arriveAt: res.data.destination})
            this.setState({planeName: res.data.plane.name})
            this.setState({planeRowsArray: this.arrayRow(res.data.plane.rows)})
            this.setState({planeColsArray: this.arrayCol(res.data.plane.cols)})

        })
        .catch( err => {
            console.log(err);
        })
    }

    componentDidMount(){
        this.getSeatingDiagram(57)
        
    }
    

    render(){

        return (
            <div>
                <h2>Select Your Seats for Reservation</h2>
                <p>Flight Number: {this.state.flightNum}</p>
                <p>Departure: {this.state.departFrom}</p>
                <p>Arrival: {this.state.arriveAt}</p>
                <p>Plane Name: {this.state.planeName}</p>
                {console.log(this.state.planeRowsArray)}
                {console.log(this.state.planeColsArray)}

                <div className="SeatsBox">
                    {
                        this.state.planeColsArray.map( (col) => (
                            
                            <div className="SeatsGrid">
                            {this.state.planeRowsArray.map( (row) => (
                                <div className="Seats" id={`${col}${row}`}>{col}{row}</div>

                            ))}
                            </div>
                        ))

                    }
                </div>
                <br />
                <br />
                <button>Make Reservation!</button>
                
            </div>
        );

    }

}

export default FlightReservation

