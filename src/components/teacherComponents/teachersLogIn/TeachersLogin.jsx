import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Icon } from "semantic-ui-react";
import base from "../../../base.js";
import logo from "../../../images/logo-new.png";
import { sendUserName } from "../../../actions/index.js";
import { Link } from "react-router-dom";
import "./TeachersLogin.css";

class TeachersLogin extends Component {
  constructor() {
    super();
    this.state = {
      teachers: null,
      letUserIn: false
    };
  }

  componentWillMount() {
    this.ref = base.syncState("loginNastavnici/", {
      context: this,
      state: "teachers"
    });
  }

  takeLoginName(event) {
    event.preventDefault();
    const user = {
      userName: this.userName.value,
      userPassword: this.userPassword.value
    };
    this.checkLoginName(user.userName, user.userPassword);
  }

  checkLoginName(x, y) {
    const names = Object.keys(this.state.teachers);
    const passwords = Object.values(this.state.teachers);
    if (names.includes(x) && passwords.includes(y)) {
      this.setState({
        letUserIn: true
      });
      this.props.sendUserName(x);
    } else {
      this.setState({
        letUserIn: false
      });
    }
  }

  render() {
    return (
      <div className="teachersLoginPanel">
        <div className="loginPanel">
          <form className="loginForm" autoComplete="nope">
            <a href="http://www.skolaprogramiranja.rs/">
              <img alt="logo edutech skole" src={logo} />
            </a>
            <label className="loginForm__label">
              Korisničko ime:
              <Icon circular color="yellow" name="user" />
            </label>
            <input
              autoComplete="off"
              ref={input => (this.userName = input)}
              type="text"
              placeholder="Unesite vaše korisničko ime."
              required
            />
            <label className="loginForm__label">
              Korisnička šifra:
              <Icon circular color="yellow" name="key" />
            </label>
            <input
              ref={input => (this.userPassword = input)}
              type="password"
              placeholder="Unesite vašu šifru."
              onChange={e => this.takeLoginName(e)}
              required
            />
            {this.state.letUserIn && (
              <Link to="/teacher" className="teacherButtonEnabled">
                Prijavite se
              </Link>
            )}
          </form>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ sendUserName }, dispatch);
}

export default connect(null, mapDispatchToProps)(TeachersLogin);
