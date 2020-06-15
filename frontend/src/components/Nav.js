import React from 'react';
import {withRouter} from 'react-router-dom';

import '../styles/helpers/_mixins.scss';
import '../styles/layout/_nav.scss';

class Nav extends React.Component {
    render() {
        return (
            <div className="nav">
                <button className="nav__item" type="button" onClick={this.onLinkClick('/about').bind(this)}>About</button>
                <button className="nav__item" type="button" onClick={this.onLinkClick("/rules").bind(this)}>How It Works</button>
                <button className="nav__item" type="button" onClick={this.onLinkClick("/contacts").bind(this)}>Contacts</button>
            </div>
        );
    }

    onLinkClick(path) {
        return function (e) {
            this.props.history.push(path)
        }
    }
}

export default withRouter(Nav);