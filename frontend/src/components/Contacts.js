import React from 'react';

import '../styles/layout/_container.scss';
import '../styles/layout/_head.scss';
import '../styles/layout/_contacts.scss';


import Logo from '../images/ill.png';


class Contacts extends React.Component {
    render() {
        return (
            <div className="start">
                <div className="container">
                    <div className="head">
                        <h1 className="head__title">Planning Poker</h1>
                        <img className="head__image" src={Logo} alt="poker logo"/>
                    </div>
                    <div className="contacts">
                        <h2 className="contacts__title">Get in touch</h2>
                        <p className="contacts__text">
                            We'd love to hear how to make Planning Poker better for you.
                            Feel free to write us:
                        </p>
                        <a className="contacts__link" href="mailto:svobnick@ya.ru">planningpoker@ask.io</a>
                    </div>
                </div>

            </div>
        );
    }
}

export default Contacts;