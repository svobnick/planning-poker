import React from 'react';
import {withRouter} from 'react-router-dom';

import '../styles/helpers/_mixins.scss';
import '../styles/layout/_nav.scss';

class Nav extends React.Component {
    constructor(props) {
        super(props);

        this.onLinkClick = this.onLinkClick.bind(this)
    }

    onLinkClick(path) {
        this.props.history.push(path)
    }

    render() {
        return (
            <div className="nav">
                <button className="nav__item" type="button"
                        onClick={() => this.onLinkClick('/about')}>About
                </button>
                <button className="nav__item" type="button"
                        onClick={() => this.onLinkClick("/rules")}>How It Works
                </button>
                <button className="nav__item" type="button"
                        onClick={() => this.onLinkClick("/contacts")}>Contacts
                </button>
            </div>
        );
    }

}

export default withRouter(Nav);