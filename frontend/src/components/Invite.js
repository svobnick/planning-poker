import React from 'react';

import '../styles/layout/_invite.scss';

class Invite extends React.Component {
    render() {
        return (
            <div className="invite">
                <div className="invite__field">
                    <label className="invite__field-label" htmlFor="invite">Invite player</label><br/>
                    <input type="text" className="invite__field-control" id="invite"
                           value="https://open.spotify.com/collection/tracks" disabled/>
                </div>
                <button className="invite__button" onClick={this.copy().bind(this)}>Copy link</button>
            </div>
        );
    }

    copy() {
        return function () {
            const copyText = document.getElementById('invite');
            copyText.select();
            copyText.setSelectionRange(0, 99999);
            document.execCommand("copy");
            navigator.clipboard.writeText(copyText.value);
        };
    }
}

export default Invite;