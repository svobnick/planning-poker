import React from 'react';
import Room from "./Room";
import Start from "./Start";
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
                        <Route exact path="/" component={Start}/>
                        <Route exact path="/room" component={Room}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
