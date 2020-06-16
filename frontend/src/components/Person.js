import React from 'react';

import '../styles/layout/_person.scss';

class Person extends React.Component {
    render() {
        return (
            <div className="person person--voter">
                John Doe
            </div>
        );
    }
}

export default Person;