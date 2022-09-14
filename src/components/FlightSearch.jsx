import React from 'react';

class FlightSearch extends React.Component {
     
  
    
    state = {
        originQuery: "",
        destinationQuery: "" 
    };
   
 
    handleInput = (ev) => {
        const value = ev.target.value;
        setState({
            ...state,
            [ev.target.originQuery]: originQuery,
            [ev.target.destinationQuery]:
            destinatdionQuery  
        });
        // console.log(ev.target.value);

    };

    handleDInput = (ev) => {
        this.setState({destinationQuery: ev.target.value});
        console.log(ev.target.value);
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
                <input type="text" value={values.originQuery} onChange={handleInput}
                name="orginQuery" placeholder="Search origin"/>
                <input type="text" value={values.destinationQuery} onChange={this.handleInput} placeholder="Search destination"/>
                <button onClick={this.submitSearch}>Search</button>
            </div>
        )


    }


} // class FlightSearch

export default FlightSearch;
