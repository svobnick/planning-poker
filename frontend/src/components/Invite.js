import React from 'react';
import {RoomContext} from './Room'

import '../styles/layout/_invite.scss';

class Invite extends React.Component {
    constructor(props) {
        super(props)

        this.copy = this.copy.bind(this)
    }

    copy() {
        const copyText = document.getElementById('invite');
        navigator.clipboard.writeText(copyText.value);
    }

    render() {
        return (
            <RoomContext.Consumer>
                {({room}) => (
                    <div className="invite">
                        <div className="invite__field">
                            <label className="invite__field-label" htmlFor="invite">Invite player</label><br/>
                            <input type="text" className="invite__field-control" id="invite"
                                   value={window.location.host + "/?invite=" + room.roomId} disabled/>
                        </div>
                        <button className="invite__button" onClick={this.copy}>Copy link</button>
                    </div>
                )}
            </RoomContext.Consumer>
        );
    }
}

export default Invite;