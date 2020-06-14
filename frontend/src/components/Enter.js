import React from 'react';
import {withRouter} from 'react-router-dom';
import {postRequest} from '../utils/requests'

import '../styles/layout/_enter.scss';
import '../styles/layout/_field.scss';
import '../styles/layout/_error.scss';
import '../styles/layout/_join.scss';

class Enter extends React.Component {

    render() {
        return (
            <div className="enter">

                <div className="field">
                    <label className="field__label" htmlFor="name">Your name
                        <span style={{color: "#585EE6", fontSize: "1.25rem", lineHeight: 1}}>
                            *
                        </span>
                    </label>
                    <br/>
                    <input
                        onChange={this.onNameChange().bind(this)}
                        type="text" className="field__control" id="name" required/>
                </div>

                <button className="enter__border-button submit" type="submit"
                        onClick={this.onCreateClick().bind(this)}
                        style={{
                            width: "100%",
                            margin: "0.5rem 0",
                        }}>
                    Create room
                </button>

                <div className="enter__break">
                    <p>or</p>
                </div>

                <div className="join">
                    <div className="join__group">
                        <label className="join__group-label" htmlFor="join">Join the room</label>
                        <br/>
                        <input
                            onChange={this.onRoomChange().bind(this)}
                            type="text" className="join__group-control" id="join"
                            placeholder="http://localhost:3000/"/>
                    </div>

                    <button className="join__button submit" type="submit"
                            onClick={this.onJoinClick().bind(this)}>
                        Join
                    </button>

                </div>
            </div>
        );
    }

    onNameChange() {
        return function () {
            if (document.getElementsByClassName("field__control")[0].value !== "") {
                let field = document.getElementById('name');
                field.classList.remove('error');
            }
        }
    }

    onRoomChange() {
        return function () {
            if (document.getElementsByClassName("join__group")[0].value !== "") {
                let field = document.getElementById('join');
                field.classList.remove('error');
            }
        }
    }

    onCreateClick() {
        return function (e) {
            let name = document.getElementsByClassName("field__control")[0].value
            if (name === "") {
                let field = document.getElementById('name');
                field.classList.add('error');
            } else {
                e.preventDefault()
                postRequest("http://localhost:8090/create", {username: name})
                    .then(response => {
                        console.log(response)
                        this.props.history.push("room/" + response.roomId)
                    })
            }
        }
    }

    onJoinClick() {
        return function (e) {
            let name = document.getElementsByClassName("field__control")[0].value
            let roomId = document.getElementsByClassName("join__group-control")[0].value
            if (roomId === "" || name === "") {
                if (roomId === "") {
                    let field = document.getElementById('join');
                    field.classList.add('error')
                } else {
                    let field = document.getElementById('name');
                    field.classList.add('error');
                }
            } else {
                e.preventDefault()
                postRequest("http://localhost:8090/join", {username: name, roomId: roomId})
                    .then(response => {
                        console.log(response)
                        this.props.history.push("room/" + response.task.roomId)
                    })
            }
        }
    }
}

export default withRouter(Enter);