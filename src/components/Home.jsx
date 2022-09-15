import React from 'react';
import FlightSearch from './FlightSearch';
import FlightSearchResults from './FlightSearchResults';
import Reservations from './Reservations';
import Users from './Users';
// import Reservations from './components/Reservations'
// import Users from './components/Users'
import FlightReservation from './FlightReservation'
import { Route, HashRouter as Router, Link } from 'react-router-dom'



class Home extends React.Component {

    render(){

        return (
            <div className="App">
                <Router>
                <header>
                <h1>WELCOME TO JEM EXCLUSIVE AIRLINES!</h1>
                <p>We only run exclusive jets so our seats are little. Not for poor people</p>
                <hr />
                    <nav>
                        <Link to='/'>Home</Link>
                        {' '}|{' '}
                        <Link to='/reservations'>Current Reservations</Link>
                        {' '}|{' '}
                        <Link to='/users'>Accounts</Link>
                        {' '}|{' '}
                        <Link to='/flightsearch'> Make a Flight Search</Link>
                        
                    </nav>

                    <hr />
                </header>
                <Route exact path="/users" component={Users} />
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

