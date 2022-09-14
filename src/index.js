import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Reservations from './components/Reservations'
import Users from './components/Users'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Reservations />,
  <Users />

);

