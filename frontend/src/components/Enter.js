import React from 'react';
import {withRouter} from 'react-router-dom';
import {postRequest} from '../utils/requests'
import {getUrlQueryParam} from "../utils/url-utils";

import '../styles/layout/_enter.scss';
import '../styles/layout/_field.scss';
import '../styles/layout/_error.scss';
import '../styles/layout/_join.scss';

class Enter extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            roomId: ""
        }

        this.onNameChange = this.onNameChange.bind(this);
        this.onCreateClick = this.onCreateClick.bind(this);
        this.onRoomChange = this.onRoomChange.bind(this);
        this.onJoinClick = this.onJoinClick.bind(this);
    }

    onNameChange(event) {
        this.setState({username: event.target.value});
        if (this.state.username !== "") {
            let field = document.getElementById('name');
            field.classList.remove('error');
        }
    }

    onCreateClick(event) {
        if (this.state.username === "") {
            let field = document.getElementById('name');
            field.classList.add('error');
        } else {
            event.preventDefault()
            postRequest("http://localhost:8090/create", {username: this.state.username})
                .then(response => {
                    console.log(response)
                    this.props.history.push({
                        pathname: "room/" + response.roomId,
                        room: response
                    })
                })
        }
    }

    onRoomChange(event) {
        this.setState({roomId: event.target.value});
        if (this.state.roomId !== "") {
            let field = document.getElementById('join');
            field.classList.remove('error');
        }
    }

    onJoinClick(event) {
        if (this.state.roomId === "") {
            let field = document.getElementById('join');
            field.classList.add('error')
        } else if (this.state.username === "") {
            let field = document.getElementById('name');
            field.classList.add('error');
        } else {
            event.preventDefault()
            postRequest("http://localhost:8090/join", {
                username: this.state.username,
                roomId: this.state.roomId
            })
                .then(response => {
                    console.log(response)
                    this.props.history.push({
                        pathname: "room/" + response.task.roomId,
                        room: response
                    })
                })
        }
    }

    componentDidMount() {
        let roomInvite = getUrlQueryParam(this.props.location.search.substr(1), "invite")
        if (roomInvite !== undefined) {
            this.setState({roomId: roomInvite})
        }
    }

    render() {
        return (
            <div className="enter">

                <div className="field">
                    <label className="field__label" htmlFor="name">Your name</label>
                    <br/>
                    <input
                        onChange={this.onNameChange}
                        type="text" className="field__control" id="name" value={this.state.username} required/>
                </div>

                <button className="enter__border-button submit" type="submit"
                        onClick={this.onCreateClick}
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
                            onChange={this.onRoomChange}
                            type="text" className="join__group-control" id="join"
                            placeholder="Enter room id" value={this.state.roomId}/>
                    </div>

                    <button className="join__button submit" type="submit"
                            onClick={this.onJoinClick}>
                        Join
                    </button>

                </div>
            </div>
        );
    }
}

export default withRouter(Enter);