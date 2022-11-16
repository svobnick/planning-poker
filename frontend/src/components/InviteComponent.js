import React, {useState} from 'react';
import {RoomContext} from './RoomComponent'

import '../styles/layout/_invite.scss';

const InviteComponent = (props) => {

    const copyToClipboard = (event) => {
        const copyText = document.getElementById('invite');
        navigator.clipboard.writeText(copyText.value);
    }
    
    return (
        <RoomContext.Consumer>
            {({room}) => (
                <div className="invite">
                    <div className="invite__field">
                        <label className="invite__field-label" htmlFor="invite">Invite player</label><br/>
                        <input type="text" className="invite__field-control" id="invite"
                            // value={window.location.host + "/?invite=" + room.roomId}
                               disabled/>
                    </div>
                    <button className="invite__button"
                        onClick={copyToClipboard}
                    >Copy link
                    </button>
                </div>
            )}
        </RoomContext.Consumer>
    );

}

export default InviteComponent;