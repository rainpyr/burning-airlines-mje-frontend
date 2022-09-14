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
        console.log(`New router should be: #/procedures/search/${this.state.searchQuery}`);

        //please now go to the following page:
        this.props.history.push(`/procedures/search/${this.state.searchQuery}`)
    }

    render(){

        return (
            <div>
                <input type="text" onChange={this.handleOInput} placeholder="Search origin"/>
                <input type="text" onChange={this.handleDInput} placeholder="Search destination"/>
                <button onClick={this.submitSearch}>Search</button>
            </div>
        )


    }



} // class FlightSearch

export default FlightSearch;