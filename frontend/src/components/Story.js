import React from 'react';

import '../styles/layout/_story.scss';
import TextareaAutosize from 'react-textarea-autosize';

class Story extends React.Component {
    render() {
        return (
            <div className="story">
                <TextareaAutosize className="story__field" placeholder="Task description" minRows={2}/>
            </div>
        );
    }
}

export default Story;