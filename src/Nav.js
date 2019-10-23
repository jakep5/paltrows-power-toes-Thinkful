import React, { Component } from 'react'
import Content from './Content'
import {Link} from 'react-router-dom';
import './Nav.css'

export default class Nav extends Component {
  render() {
    return (
      <Content className='Nav'>
        <a href='/'>
          Home
        </a>
        <a href='/about'>
          About
        </a>
        <a href='/workouts'>
          Workouts
        </a>
      </Content>
    )
  }
}
