import React from 'react';

import Menu from './Menu';

import '../styles/layout/_poker.scss';

class Room extends React.Component {
    render() {
        const {params} = this.props.match;
        const {roomId} = params
        return (
            <div className="poker">
                <Menu />
                <div className="roomId">RoomId: ({roomId})</div>
            </div>
        );
    }
}

export default Room;