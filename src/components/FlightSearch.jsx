import React from 'react';

class FlightSearch extends React.Component {
     
    // App = () =>{
    //  const [values, setValues] = useState({
    //  originQuery: "",
    //  destinationQuery: "" 
    //     });

    // }
    
    state = {
        originQuery: "",
        destinationQuery: "" 
    };
   
    const [values, setValues] = useState(initialValues);
    handleInput = (ev) => {
        const value = ev.target.value;
        setState({
            ...state,
            [ev.target.originQuery]: originQuery,
            [ev.target.destinationQuery]:
            destinationQuery  
        });
        // console.log(ev.target.value);

    };

    // handleDInput = (ev) => {
    //     this.setState({destinationQuery: ev.target.value});
    //     console.log(ev.target.value);
    // };
    function (){
        const [values, setValues] = useState(initialValues);

        const handleInput = (e) => {
            const {name, value} = e.target;
            setValues({
                ...values,
                [name]: value,
            })
        };

    }
   


    submitSearch = () => {

       this.function();
       this.handleInput();
        console.log('Search submit!');

        console.log(`New router should be: #/procedures/search/${this.state.originQuery}/${this.state.destinationQuery}`);

        //please now go to the following page:
        this.props.history.push(`/procedures/search/${this.state.originQuery}/${this.state.destinationQuery}`)
    }

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
