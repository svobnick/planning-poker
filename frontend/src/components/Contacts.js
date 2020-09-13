import React from 'react';

import '../styles/layout/_container.scss';
import '../styles/layout/_head.scss';
import '../styles/layout/_contacts.scss';

import Menu from "./Menu";
import Back from "./Back";

import Bubble from '../images/bubble.png'


class Contacts extends React.Component {
    render() {
        return (
            <div className="about">
                <Menu/>
                <div className="about__head">
                    <img className="about__head-img" alt="contacts logo" src={Bubble}/>
                    <h1 className="about__head-title">Get in touch</h1>
                    <p className="about__head-lead">We'd love to hear how to make Planning Poker better for you.</p>
                    <p className="about__head-lead">Feel free to write us!</p>
                </div>

                <div className="about__text">
                    <div className="contacts">
                        <h4 className="contacts__title"><span role="img" aria-label="letter">💌</span> Email</h4>
                        <a className="contacts__text" href="mailto:svobnick@ya.ru">planningpoker@ask.io</a>
                    </div>
                    <div className="contacts">
                        <h4 className="contacts__title"><span role="img" aria-label="robot">🤖</span> Project on Github
                        </h4>
                        <a className="contacts__text" href="https://github.com/svobnick/planning-poker"
                           rel="noopener noreferrer" target="_blank">svobnick/planning-poker</a>
                    </div>
                </div>

                <Back/>
            </div>
        );
    }
}

export default Contacts;