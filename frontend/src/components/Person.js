import React from 'react';

import '../styles/layout/_person.scss';

class Person extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: null,
            username: null,
            answered: false
        }
    }

    componentDidMount() {
        this.setState({
            userId: this.props.userId,
            username: this.props.username,
            answered: this.props.answered
        })
    }

    render() {
        let classes = this.state.answered ? "person person--voter" : "person";
        return (
            <div className={classes}>
                {this.state.username}
            </div>
        );
    }
}

export default Person;