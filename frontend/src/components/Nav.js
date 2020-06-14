import React from 'react';
import {withRouter} from 'react-router-dom';

import '../styles/helpers/_mixins.scss';
import '../styles/layout/_nav.scss';

class Nav extends React.Component {
    render() {
        return (
            <div className="nav">
                <button className="nav__item" type="button" onClick={this.onLinkClick().bind(this)}>About</button>
                <button className="nav__item" type="button">How It Works</button>
                <button className="nav__item" type="button">Contacts</button>
            </div>
        );
    }

    onLinkClick() {
        return function (e) {
            this.props.history.push("/about")
        }
    }
}

export default withRouter(Nav);