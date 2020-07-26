import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Navbar extends Component {
  logOut = (e) => {
    e.preventDefault()
    localStorage.removeItem('token')
    // this.props.history.push('/')
    window.location = '/'
  }
  render() {

    return (
      <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

      <Link class="sidebar-brand d-flex align-items-center justify-content-center" to="/">
        <div class="sidebar-brand-icon rotate-n-15">
          <i class="fas fa-vote-yea"></i>
        </div>
        <div class="sidebar-brand-text mx-3">Evote Admin <sup>2</sup></div>
      </Link>

      <hr class="sidebar-divider my-0"/>

      <li class="nav-item active">
        <Link class="nav-link" to="/">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span></Link>
      </li>

      <hr class="sidebar-divider"/>

      <div class="sidebar-heading">
        Interface
      </div>

      <li class="nav-item">
        <Link class="nav-link collapsed" to="/registerCandidate" >
          <i class="fas fa-fw fa-cog"></i>
          <span>Registeration</span>
        </Link>
       
      </li>

      <li class="nav-item">
        <Link class="nav-link collapsed" to="/candidatesList">
          <i class="fas fa-fw fa-list-alt"></i>
          <span>Candidates</span>
        </Link>
        
      </li>
      
      <hr class="sidebar-divider"/>
      <li class="nav-item">
      <Link class="nav-link collapsed" onClick={this.logOut}>
          <i class="fa fa-sign-out-alt"></i>
          <span>Log Out</span>
          </Link>
          </li>
     

      <hr class="sidebar-divider d-none d-md-block"/>

      <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle"></button>
      </div>

    </ul>
    )
  }
}




export default Navbar

