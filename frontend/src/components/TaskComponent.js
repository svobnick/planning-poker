import React, {useState, useEffect} from 'react';

import '../styles/layout/_story.scss';
import TextareaAutosize from 'react-textarea-autosize';
import {Client} from "@stomp/stompjs";
import {useLocation} from "react-router-dom";

const client = new Client()

const TaskComponent = () => {
    const location = useLocation();
    const [taskId, setTaskId] = useState("")
    const [taskname, setTaskName] = useState("")

    const onNameChange = (event) => {
        setTaskName(event.target.value);

        let payload = {
            taskId: taskId,
            taskname: event.target.value
        }

        client.publish({
            destination: "/app/change-name/" + location.state.roomId,
            body: JSON.stringify(payload)
        })
    }

    useEffect(() => {
        console.log(location)
        let room = location.state
        let task = location.state.task
        setTaskId(task.taskId)
        setTaskName(task.name)

        client.configure({
            brokerURL: "ws://localhost:8090/poker",
            onConnect: () => {
                client.subscribe(
                    "/task/name/" + room.roomId,
                    message => {
                        setTaskName(message.body)
                    },
                    {lol: "kek"}
                )
            }
        })
    });

    client.activate();

    return (
        <div className="task">
            <TextareaAutosize className="task__field" placeholder="TaskComponent description" minRows={2}
                              onChange={onNameChange}/>
        </div>
    );
}

export default TaskComponent;