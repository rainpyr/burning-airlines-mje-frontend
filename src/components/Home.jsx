import React, { Children, useState } from 'react';
import FlightSearch from './FlightSearch';
import FlightSearchResults from './FlightSearchResults';
import Reservations from './Reservations';
import Users from './Users';
import UserSearch from './UserSearch';
// import Reservations from './components/Reservations'
// import Users from './components/Users'
import FlightReservation from './FlightReservation'
import { Route, HashRouter as Router, Link } from 'react-router-dom'

// function currentUser(props){
//     return(
//       <p>{props.searchText.content}</p>
        
//     );

// }



class Home extends React.Component {

//    [childie] = useState([<Users></Users>])
//    addChild = () =>{
//     child = [<Users></Users>];
//     setChildie
//    }
    // define the state here
    state ={
        searchText: "",
        // currentUser: ""
    }

    checkUser = (user) =>{

        console.log(`checkUser`, user);

       this.setState({
            searchText: user
        })

    }


    // handleInput = (event) =>{
    //     this.setState({ searchText: event.target.value})
    // }
    //   submitSearch = () => {
    //     console.log('Search Submitted');
    //     console.log(`New route should be /users/${this.state.searchText}`);
    //     this.props.history.push(`/flightsearch`);
        
    // }

    


    render(){

        return (
            <div className="App">
                <Router>
                <header>
                <h1>WELCOME TO JEM EXCLUSIVE AIRLINES!</h1>
                <p>We only run exclusive jets so our seats are little. Not for poor people</p>
                {/* <UserSearch notifyParent={this.checkUser}/> */}
                <p> Welcome user: {this.state.searchText}</p>
                <Users notifyParent={this.checkUser} />
                <br />
                    <nav>
                        <Link to='/'>Home</Link>
                        {' '}|{' '}
                        <Link to='/reservations'>Current Reservations</Link>
                        {' '}|{' '}
                        {/* <Link to='/users'>Accounts</Link>
                        {' '}|{' '} */}
                        <Link to='/flightsearch'> Make a Flight Search</Link>
                        
                    </nav>


                <hr />
                </header>
                {/* <Route exact path="/props-through-component" component={() => <Users title={searchText} />} /> */}
                {/* <Route exact path="/users" component={Users } />  */}
                <Route exact path="/reservations" component={ Reservations }/>
                <Route exact path="/flightsearch" component={ FlightSearch }/>
                {/* <Route exact path="/flightsearchresults" component={ FlightSearchResults }/> */}
                <Route exact path="/search/:origin/:destination" component={ FlightSearchResults }/>
                <Route exact path="/flights/:id" component={FlightReservation} />
                

                </Router>
            </div>
        )
    }
}

export default Home




// FORGET USER LOGIN FOR NOW
// GOAL - MAKE ONE USER DO ONE RESERVATION
// HARDCODE one USER ID to make a reservation
// flightSearch & fligthSearchResult components - EVA
// 'show flights page' & reservations - JUSTIN / MO
// reservations component - MO

