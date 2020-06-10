import React from 'react';

import '../styles/_nav.css';

class Nav extends React.Component {
    render() {
        return (
            <div className="nav">
                <button className="nav__item">About</button>
                <button className="nav__item">How It Works</button>
                <button className="nav__item">Contacts</button>
            </div>
        );
    }
}

export default Nav;