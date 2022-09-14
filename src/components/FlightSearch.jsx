import React from 'react';




class FlightSearch extends React.Component {

    state = {
        originQuery: '',
        destinationQuery: ''
        
    };

    handleOInput = (ev) => {
        this.setState({originQuery: ev.target.value});
    };

    handleDInput = (ev) => {
        this.setState({destinationQuery: ev.target.value});
    };

    submitSearch = () => {
        console.log('Search submit!');
        console.log(`New router should be: #/flights/search/${this.state.originQuery}`);

        //please now go to the following page:
        this.props.history.push(`/flights/search/${this.state.originQuery}/${this.state.destinationQuery}`)
    };


    render(){

        return (
            <div>
                <input type="text" onChange={this.handleOInput} placeholder="Search origin"/>
                <input type="text" onChange={this.handleDInput} placeholder="Search destination"/>
                <button onClick={this.submitSearch}>Search</button>
                <hr />
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
                
                )} */}
                
                
                </table>
                }

            </div>
        )


    }



} // class FlightSearch

export default FlightSearch;
