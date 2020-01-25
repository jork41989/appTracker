import React from 'react';
import { withRouter } from 'react-router-dom';
import './forms.css';
import ReactTooltip from 'react-tooltip'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.errorCheck = this.errorCheck.bind(this);
    this.demoLogin = this.demoLogin.bind(this);

  }


  errorCheck() {
    
    
    if (this.props.currentUser && Object.keys(this.props.currentUser).length > 0) {
      this.props.closeModal()
    }
    
    this.setState({ errors: this.props.errors })
    
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user).then(this.errorCheck)
  }

  renderErrors() {
    
    if (Object.keys(this.state.errors).includes('email')){
     let emailFeild = document.getElementById('email')
      emailFeild.style.border = '3px solid red'
    } 
    if (Object.keys(this.state.errors).includes('password')) {
      let pwFeild = document.getElementById('password')
      pwFeild.style.border = '3px solid red'
    }


    return(
      <div>
        {Object.keys(this.state.errors).map((error, i) => (
            <div  id={i}>
            <ReactTooltip id={error}  place="top" type="error" effect="solid">
              <span>{this.state.errors[error]}</span>
            </ReactTooltip>
          </div>
        ))}
      </div>
    );
  }


  demoLogin(e) {
    e.preventDefault();
    let user = {
      email: 'opinion@opinion.net',
      password: 'opinion'
    };
    this.props.login(user).then(this.errorCheck)
  }


  


  render() {
    return (
      <div className={'signup-login-bg'}>
        <div >
          <div onClick={this.props.closeModal} className="close-x">X</div>
          <form onSubmit={this.handleSubmit}>
            <div className={'formCenter'}>
              <p className={'formHeader'}>Sign In</p>
              <br/>
              {this.renderErrors()}
         
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                placeholder="Email" 
                className={'formInput'}
                  id={'email'}
                  data-tip data-for={'email'}
                />
                
              <br/>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  placeholder="Password"
                  className={'formInput'}
                  id={'password'}
                data-tip data-for={'password'}
                />
              <br/>
              <input type="submit" value="Sign In" className={'submit'}/>

              <button className="submit" onClick={this.demoLogin}>Demo User</button>

            </div>

          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);