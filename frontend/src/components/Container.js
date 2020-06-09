import React from 'react';
import '../styles/_container.css';
import Logo from '../images/ill.png';


class Container extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="head">
                    <h1 className="head__title">Planning Poker</h1>
                    <img className="head__image" src={Logo} alt="poker logo"/>
                </div>
            </div>
        );
    }
}

export default Container;