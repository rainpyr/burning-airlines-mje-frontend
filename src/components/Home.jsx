import React from 'react';
import Reservations from './Reservations';
import Users from './Users';
// import Reservations from './components/Reservations'
// import Users from './components/Users'
import { Route, HashRouter as Router, Link } from 'react-router-dom'
import FlightReservation from './FlightReservation'
import '../App.css';


class Home extends React.Component {

    render(){

        return (
            <div className="App">
                <Router>
                <header>
                <h1>WELCOME TO MJE EXCLUSIVE AIRLINES!</h1>
                <p>We only run exclusive jets so our seats are little. Not for poor people</p>
                <hr />
                    <nav>
                        {/* <Link to='/'>Home</Link>
                        {' '}|{' '}
                        <Link to='/reservations'>Reservations</Link>
                        {' '}|{' '}
                        <Link to='/users'>Users</Link> */}
                        <Users />
                        <Reservations />

                    </nav>
                    <hr />
                </header>
                {/* <Route exact path="/users" component={Users} />
                <Route exact path="/reservations" component={ Reservations }/> */}

               <Route component={FlightReservation} />

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

