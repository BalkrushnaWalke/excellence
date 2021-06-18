import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import history from '../history.js';

const Main = (props) => {

  const Todo = () => {
    props.history.push("/Todo");
  }

  const Users = () => {
    props.history.push("/Users");
  }

  return(
    <div className='center'>
      <div className='todo'>
        <Button style={{ backgroundColor: '#40e5c2', borderColor: '#40e5c2' }} onClick={Todo}>Go to Todo App</Button>
      </div>
      <div className='users'>
        <Button style={{ backgroundColor: '#ff753e', borderColor: '#ff753e' }} onClick={Users}>Go to Users App</Button>
      </div>
    </div>
  )
}

export default Main
