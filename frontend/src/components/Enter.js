import React from 'react';

import '../styles/_border-button.css';
import '../styles/_field.css';
import '../styles/_border-button.css';
import '../styles/_break.css';
import '../styles/_join.css';
import '../styles/_button.css';

class Enter extends React.Component {
    render() {
        return (
            <div className="entry">

                <div className="field">
                    <label className="field__label" htmlFor="name">Your name
                        <span style={{color: "#585EE6", fontSize: "1.25rem", lineHeight: 1}}>
                        *
                    </span>
                    </label>
                    <br />
                    <input type="text" className="field__control" id="name" required />
                </div>

                <button className="border-button" type="button"
                        style={{
                            width: "100%",
                            margin: "0.5rem 0"
                        }}>
                    Create room
                </button>

                <div className="break">
                    <p>or</p>
                </div>

                <div className="join">
                    <div className="join__group">
                        <label className="join__group-label" htmlFor="join">Join the room</label>
                        <br/>
                        <input type="text" className="join__group-control" id="join"/>
                    </div>

                    <button className="button" type="button">
                        Join
                    </button>

                </div>
            </div>
        );
    }
}

export default Enter;