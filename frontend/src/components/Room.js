import React from 'react';

import Menu from './Menu';
import Story from './Story';
import Timer from './Timer';
import Players from './Players';
import Card from './Card';

import '../styles/layout/_poker.scss';
import '../styles/layout/_title.scss';
import '../styles/layout/_content.scss';
import '../styles/layout/_poll.scss';
import '../styles/layout/_unit.scss';

import Nav from "./Nav";

class Room extends React.Component {
    render() {
        // const {params} = this.props.match;
        // const {roomId} = params;
        return (
            <div className="poker">
                <Menu />

                <div className="title">
                    <Story />
                    <Timer />
                </div>

                <div className="content">
                    <div className="poll">
                        <Card/>
                    </div>
                    <div className="unit">
                        <Players/>
                        <Nav/>
                    </div>
                </div>

                {/*<div className="roomId">RoomId: ({roomId})</div>*/}
            </div>
        );
    }
}

export default Room;