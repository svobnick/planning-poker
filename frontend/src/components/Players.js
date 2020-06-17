import React from 'react';

import '../styles/layout/_players.scss';

import Person from './Person';
import Invite from './Invite';

class Players extends React.Component {
    render() {
        return (
            <div className="players">
                <h2 className="players__title">Players</h2>
                <div className="players__person">
                    <Person />
                    <Person />
                    <Person />
                    <Person />
                    <Person />
                    <Person />
                    <Person />
                </div>

                <Invite/>
            </div>
        );
    }
}

export default Players;