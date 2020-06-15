import React from 'react';
import {withRouter} from 'react-router-dom';

import '../styles/helpers/_mixins.scss';
import '../styles/layout/_nav.scss';

class Nav extends React.Component {
    render() {
        return (
            <div className="nav">
                <button className="nav__item" type="button" onClick={this.onLinkClickAbout().bind(this)}>About</button>
                <button className="nav__item" type="button" onClick={this.onLinkClickRules().bind(this)}>How It Works</button>
                <button className="nav__item" type="button" onClick={this.onLinkClickContacts().bind(this)}>Contacts</button>
            </div>
        );
    }

    onLinkClickAbout() {
        return function (e) {
            this.props.history.push("/about")
        }
    }

    onLinkClickRules() {
        return function (e) {
            this.props.history.push("/rules")
        }
    }

    onLinkClickContacts() {
        return function (e) {
            this.props.history.push("/contacts")
        }
    }
}

export default withRouter(Nav);