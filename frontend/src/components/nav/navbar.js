import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

 

  componentDidMount(){
    if (this.props.loggedIn && this.props.currentUser){
      this.props.getTheCurUser()
    }
  }


  getLinks() {
      if (this.props.loggedIn) {
        return (
          <div className="nav-links">
            <button onClick={() => this.props.openModal({ modal: 'addjob' })}>Log Application</button>
              <button onClick={this.logoutUser}>Logout</button>
              <p>{this.props.currentUser.username}</p>
            
          </div>
        );
      } else {
        return (
            <div className="nav-links">
              <button onClick={() => this.props.openModal({modal: 'login'})}>Login</button>
            <button onClick={() => this.props.openModal({modal: 'signup'})}>Create account</button>

            
            </div>
        );
      }
  }

  render() {
    
      return (
        <div className="navbar-section">
          <div className="NavBar">
            <div className={'logoDiv'}>
              <Link to={'/'} className={'logoDiv'} ><h1 className="logo"></h1> <h1 className={'logoText'}>App Trackr</h1></Link>
            </div>
              { this.getLinks() }
          </div>
        </div>
      );
  }
}

export default NavBar;