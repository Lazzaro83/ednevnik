import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parents from '../images/parents.png';
import teachers from '../images/teaching.png';
import logo from '../images/logo-new.png'
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className="homePanel">
                <a href='http://www.skolaprogramiranja.rs/' className='logo'><img alt='logo edutech skole'
                                                                                  src={ logo }/></a>
                <div className="Panel">
                    <Link to="/parents-login">
                        <img src={ parents } className='home-logo' alt="roditelji"/>
                        <h1>Roditelji</h1>
                    </Link>
                </div>
                <div className="Panel teachers">
                    <Link to="/teachers-login">
                        <img src={ teachers } className='home-logo' alt="nastavnici"/>
                        <h1>Nastavnici</h1>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Home;
