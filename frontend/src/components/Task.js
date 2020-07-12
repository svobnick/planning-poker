import React from 'react';

import '../styles/layout/_story.scss';
import TextareaAutosize from 'react-textarea-autosize';
// import {client} from "../utils/websocket";
import {Client} from "@stomp/stompjs";
import {RoomContext} from "./Room";

const client = new Client()

class Task extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            taskId: "",
            taskname: ""
        }

        this.onNameChange = this.onNameChange.bind(this);
    }

    onNameChange(event) {
        this.setState({taskname: event.target.value});
        let payload = {taskId: this.state.taskId, taskname: event.target.value}

        client.publish({
            destination: "/app/change-name/" + this.props.context.room.roomId,
            body: JSON.stringify(payload)
        })
    }

    componentDidMount() {
        let room = this.props.context.room
        let task = this.props.context.room.task
        this.setState({taskId: task.id, taskname: task.name})

        client.configure({
            brokerURL: "ws://localhost:8090/poker",
            onConnect: () => {
                client.subscribe(
                    "/task/name/" + room.roomId,
                    message => {
                        this.setState({taskname: message.body})
                    },
                    {lol: "kek"}
            )
            }
        });

        client.activate();
    }

    render() {
        return (
            <div className="task">
                <TextareaAutosize className="task__field" placeholder="Task description" minRows={2}
                                  onChange={this.onNameChange}
                                  value={this.state.taskname}/>
            </div>
        );
    }

}

const TaskContextWrapper = () => (
    <RoomContext.Consumer>
        {context =>
            <Task context={context}/>
        }
    </RoomContext.Consumer>
)

export default TaskContextWrapper;