import React from 'react';


class Room extends React.Component {
    render() {
        const {params} = this.props.match;
        const {roomId} = params
        return (
            <div className="poker">Hello
                <div className="roomId">RoomId: ({roomId})</div>
            </div>
        );
    }
}

export default Room;