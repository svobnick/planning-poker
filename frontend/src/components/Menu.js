import React from 'react';

import '../styles/layout/_menu.scss';


class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                <h1 className="menu__logo" onClick={this.onLinkClick('/').bind(this)}>Planning<br/> Poker</h1>
            </div>
        );
    }

    onLinkClick(path) {
        return function (e) {
            this.props.history.push(path)
        }
    }
}

export default Menu;