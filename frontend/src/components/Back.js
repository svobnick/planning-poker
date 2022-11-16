import React from 'react';

import '../styles/helpers/_mixins.scss';
import '../styles/layout/_back.scss';

class Back extends React.Component {
    render() {
        return (
            <div className="back">
                <button className="back__button" type="button">Go Back</button>
            </div>
        );
    }
}

export default Back;