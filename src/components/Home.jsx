import React from 'react'
import Reservations from './components/Reservations'
import Users from './components/Users'

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
                        <Link to="/">Home</Link>
                        {' '}|{' '}
                    </nav>
                    <hr />
                </header>

               

                </Router>
            </div>
        )
    }
}

export default Home