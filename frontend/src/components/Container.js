import React from 'react';

import '../styles/_container.css';
import '../styles/_form.css';
import '../styles/_head.css';

import Logo from '../images/ill.png';

import Enter from "./Enter";
import Nav from "./Nav";


class Container extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="head">
                    <h1 className="head__title">Planning Poker</h1>
                    <img className="head__image" src={Logo} alt="poker logo"/>
                </div>
                <form className="form">
                    <h2 className="form__title">Let's start!</h2>
                    <Enter/>
                    <Nav/>
                </form>
            </div>
        );
    }
}

export default Container;