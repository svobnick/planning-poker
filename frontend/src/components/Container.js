import React from 'react';

import '../styles/layout/_container.scss';
import '../styles/layout/_form.scss';
import '../styles/layout/_head.scss';


import Logo from '../images/ill.png';

import EnterComponent from "./EnterComponent";
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
                    <EnterComponent/>
                    <Nav/>
                </form>
            </div>
        );
    }
}

export default Container;