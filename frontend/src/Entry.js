import React from 'react';


class Entry extends React.Component {
    render() {
        return (
            <div className="Entry">
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Your name</label>
                        <textarea className="form-control" id="name" rows="1"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="room-name">Room name</label>
                        <textarea className="form-control" id="room-name" rows="1"></textarea>
                    </div>
                    <a href="/room" type="submit" className="btn btn-primary">Submit</a>
                </form>
            </div>
        );
    }
}

export default Entry;