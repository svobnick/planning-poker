import React from 'react';

import Menu from './Menu';
import Story from './Story';
import Timer from './Timer';
import Players from './Players';

import '../styles/layout/_poker.scss';
import '../styles/layout/_title.scss';
import '../styles/layout/_content.scss';

class Room extends React.Component {
    render() {
        const {params} = this.props.match;
        const {roomId} = params
        return (
            <div className="poker">
                <Menu />

                <div className="title">
                    <Story />
                    <Timer />
                </div>

                <div className="content">
                    <Players/>
                </div>

                <div className="roomId">RoomId: ({roomId})</div>
            </div>
        );
    }
}

export default Room;