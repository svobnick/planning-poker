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
                    <br/>
                    <input
                    onChange={this._validate().bind(this)}
                        type="text" className="field__control" id="name" required/>
                </div>

                <button className="border-button submit" type="submit"
                        onClick={this._validate_onClick().bind(this)}
                        style={{
                            width: "100%",
                            margin: "0.5rem 0",
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
                        <input type="text" className="join__group-control" id="join"
                               placeholder="http://localhost:3000/"/>
                    </div>

                    <button className="button submit" type="submit">
                        Join
                    </button>

                </div>
            </div>
        );
    }

    _validate() {
        return function () {
            if (document.getElementsByClassName("field__control")[0].value !== "") {
                let field = document.getElementById('name');
                field.classList.remove('error');
            }
        }
    }

    _validate_onClick() {
        return function () {
            if (document.getElementsByClassName("field__control")[0].value === "") {
                let field = document.getElementById('name');
                field.classList.add('error');
            }
        }
    }
}

export default Enter;