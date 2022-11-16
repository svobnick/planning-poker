import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useSearchParams} from "react-router-dom";
import {postRequest} from '../utils/requests'

import '../styles/layout/_enter.scss';
import '../styles/layout/_field.scss';
import '../styles/layout/_error.scss';
import '../styles/layout/_join.scss';

const EnterComponent = (props) => {
    const [searchParams, setSearchParams] = useSearchParams({});
    const [username, setUsername] = useState("");
    const [roomId, setRoomId] = useState("");
    let navigate = useNavigate();

    const onNameChange = (event) => {
        setUsername(event.target.value)
        if (username !== "") {
            const field = document.getElementById('name');
            field.classList.remove('error');
        }
    }

    const onCreateClick = (event) => {
        if (username === "") {
            const field = document.getElementById('name');
            field.classList.add('error');
            field.focus()
        } else {
            event.preventDefault()
            postRequest("http://localhost:8090/create", {username: username})
                .then(response => {
                    navigate("room/" + response.roomId,
                        {state: response})
                })
        }
    }

    const onRoomChange = (event) => {
        setRoomId(event.target.value);
        if (roomId !== "") {
            const field = document.getElementById('join');
            field.classList.remove('error');
        }
    }

    const onJoinClick = (event) => {
        if (roomId === "") {
            const field = document.getElementById('join');
            field.classList.add('error')
            field.focus()
        } else if (username === "") {
            const field = document.getElementById('name');
            field.classList.add('error');
            field.focus()
        } else {
            event.preventDefault()
            postRequest("http://localhost:8090/join", {
                username: username,
                roomId: roomId
            })
                .then(response => {
                    console.log("kek")
                    navigate("room/" + response.task.roomId,
                        {state: response})
                })
        }
    }

    useEffect(() => {
        const roomInvite = searchParams.get("invite")
        if (roomInvite !== undefined) {
            setRoomId(roomInvite)
            document.getElementById("join").value = roomId
        }
    });

    return (
        <div className="enter">

            <div className="field">
                <label className="field__label" htmlFor="name">Your name</label>
                <br/>
                <input
                    onChange={onNameChange}
                    type="text"
                    className="field__control"
                    id="name"/>
            </div>

            <button className="enter__border-button"
                    type="button"
                    onClick={onCreateClick}
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
                        onChange={onRoomChange}
                        type="text"
                        className="join__group-control"
                        id="join"
                        placeholder="Enter room id"/>
                </div>

                <button className="join__button"
                        type="button"
                        onClick={onJoinClick}>
                    Join
                </button>

            </div>
        </div>
    );
}

export default EnterComponent;