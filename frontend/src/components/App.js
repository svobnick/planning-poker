import React from 'react';
import {Stomp} from "@stomp/stompjs/esm5/compatibility/stomp";
import Room from "./Room";
import Start from "./Start";
import About from "./About";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

let client = Stomp.client("ws://localhost:8090/poker");

const connect_callback = function () {
    // called back after the client is connected and authenticated to the STOMP server
};

const error_callback = function (error) {
    // display the error's message header:
    alert(error.headers.message);
};

const headers = {
    lol : "kek"
}

client.connect(headers, connect_callback, error_callback);

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route exact path="/" component={Start}/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/room/:roomId" component={Room}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
