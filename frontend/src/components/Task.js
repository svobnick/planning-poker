import React from 'react';

import '../styles/layout/_story.scss';
import TextareaAutosize from 'react-textarea-autosize';

class Task extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            taskname: ""
        }

        this.onNameChange = this.onNameChange.bind(this);
    }

    onNameChange(event) {
        this.setState({taskname: event.target.value});
        // todo send to server after user stop typing (1 second after update)
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

export default Task;