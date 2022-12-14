import React from 'react';
import Users from './Users';



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
        console.log('Search submit!', this.state.originQuery, this.state.destinationQuery);
        // console.log(`New router should be: #/procedures/search/${this.state.searchQuery}`);
        console.log(`New router should be: #/search/${this.state.originQuery}/${this.state.destinationQuery}`);

        //please now go to the following page:
        this.props.history.push(`/search/${this.state.originQuery}/${this.state.destinationQuery}`)
    };
    render(){

        return (
            <div>
                <div>
                    <p>Welcome please search a flight {this.state.searchText}</p>
                </div>
                <input type="text" onChange={this.handleOInput} placeholder="Search origin"/>
                <input type="text" onChange={this.handleDInput} placeholder="Search destination"/>
                <button onClick={this.submitSearch}>Search</button>
                <hr />
                {
                // <table>
                // <tr>
                //     <th>Flight</th>
                //     <th>Date</th>
                //     <th>Origin</th>
                //     <th>Destination</th>
                //     <th>Plane</th>
                //     <th>Remaining Seats</th>
                // </tr>
                
                
                
                // </table>
                }

    
    
         </div>
    )   
}

}

// class FlightSearch

export default FlightSearch;
