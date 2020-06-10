import React from 'react';

import '../styles/_border-button.css';

class CreateButton extends React.Component {
    render() {
        return (
            <button className="border-button" type="button"
                    style={{
                        width: "100%",
                        margin: "0.5rem 0"
                    }}>
                Create room</button>
        );
    }
}

export default CreateButton;