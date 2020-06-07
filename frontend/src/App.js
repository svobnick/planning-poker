import React from 'react';
import Room from "./Room";
import Entry from "./Entry";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route exact path="/" component={Entry}/>
                        <Route exact path="/room" component={Room}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
