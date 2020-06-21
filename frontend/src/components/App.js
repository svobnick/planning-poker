import React from 'react';
import Room from "./Room";
import Start from "./Start";
import About from "./About";
import Rules from "./Rules";
import Contacts from "./Contacts";

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
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/rules" component={Rules}/>
                        <Route exact path="/contacts" component={Contacts}/>
                        <Route exact path="/room/:roomId" component={Room}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
