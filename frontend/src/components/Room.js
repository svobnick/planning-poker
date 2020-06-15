import React from 'react';

import Menu from './Menu';
import Story from './Story'

import '../styles/layout/_poker.scss';
import '../styles/layout/_title.scss';

class Room extends React.Component {
    render() {
        const {params} = this.props.match;
        const {roomId} = params
        return (
            <div className="poker">
                <Menu />

                <div className="title">
                    <Story />
                </div>

                <div className="roomId">RoomId: ({roomId})</div>
            </div>
        );
    }
}

export default Room;