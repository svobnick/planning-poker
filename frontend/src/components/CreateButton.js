import React from 'react';

class CreateButton extends React.Component {
    render() {
        return (
            <button
                style={{
                    width: "100%",
                    margin: "0.5rem 0",
                    fontSize: "0.875rem",
                    lineHeight:"1.5",
                    fontWeight: "bold",

                    padding: "0.5rem 2rem",

                    background: "transparent",
                    borderRadius: "8px",

                    border: "1px solid #585EE6",
                    outline: "none",
                    cursor: "pointer",

                    color: "#585EE6",
                    textAlign: "center",
                    textDecoration: "none"
                }}
                type="button">
                Create room
            </button>
        );
    }
}

export default CreateButton;