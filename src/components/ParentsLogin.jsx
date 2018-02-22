import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import base from '../base.js';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { sendUserName } from '../actions/index.js';
import { Icon, Button } from 'semantic-ui-react';
import './ParentsLogin.css';
import logo from '../images/logo-new.png'

class ParentsLogin extends Component {
  constructor(){
    super();
    this.state = {
      parents: null,
      letUserIn: false
    }
  }

  componentWillMount(){
    this.ref = base.syncState('loginRoditelji/', {
      context: this,
      state: 'parents'
    })
  }

  takeLoginName(event){
    event.preventDefault();
    const user = {
      parentsName: this.parentsName.value,
      parentsPassword: this.parentsPassword.value
    }
    this.checkLoginName(user.parentsName, user.parentsPassword)
  }

  checkLoginName(x, y) {
    const names = Object.keys(this.state.parents)
    const passwords = Object.values(this.state.parents)
    if(names.includes(x) && passwords.includes(y)){
      this.setState({
        letUserIn: true
      });
      this.props.sendUserName(x);
    } else {
      this.setState({
        letUserIn: false
      })
    }
}
  render() {
    return (
      <div className="parentsLoginPanel">
        <div className='loginPanel'>
          <form className='loginForm'>
              <a href='http://www.skolaprogramiranja.rs/'><img alt='logo edutech skole' src={logo}/></a>
            <label className='loginForm__label'>
              Korisničko ime:
              <Icon circular color='yellow' name='user' />
            </label>
            <input
              type='text'
              placeholder='Unesite vaše korisničko ime.'
              ref={(input) => this.parentsName = input}
              required
            />
            <label className='loginForm__label'>
              Korisnička šifra:
              <Icon circular color='yellow' name='key' />
            </label>
            <input
              type='password'
              placeholder='Unesite vašu šifru.'
              ref={(input) => this.parentsPassword = input}
              onChange={(e) => this.takeLoginName(e)}
            />
            {this.state.letUserIn ?
              <Link
                to='/student'
                className='buttonEnabled'
              >
                Prijavite se
              </Link> :
            <Button className='buttonEnabled' disabled>Prijavite se</Button>
            }
          </form>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ sendUserName }, dispatch);
}

export default connect (null, mapDispatchToProps)(ParentsLogin);
