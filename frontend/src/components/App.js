import React from 'react';
import RoomComponent from "./RoomComponent";
import Start from "./Start";
import About from "./About";
import Rules from "./Rules";
import Contacts from "./Contacts";

import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';


class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Start/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/rules" element={<Rules/>}/>
                        <Route path="/contacts" element={<Contacts/>}/>
                        <Route path="/room/:roomId" element={<RoomComponent/>}/>
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default App;
