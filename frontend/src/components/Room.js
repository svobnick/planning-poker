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

export const RoomContext = React.createContext({
    room: {},
    toggleRoom: () => {}
})

class Room extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            room: this.props.location.room
        }
    }

    render() {
        return (
            <RoomContext.Provider value={this.state}>
                <div className="poker">
                    <Menu/>

                    <div className="title">
                        <Story/>
                        <Timer/>
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

                </div>
            </RoomContext.Provider>
        );
    }
}

export default Room;