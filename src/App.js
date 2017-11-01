import React, {Component} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

class App extends Component {

    constructor(p) {
        super(p);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.toggled = "";
    }

    toggleMenu() {
        return {toggled: "toggled"};
    }

    render() {
        return (
            <div className="App">
                <div id="wrapper">
                    <Sidebar/>
                    <MainContent/>
                </div>
            </div>
        );
    }
}

export default App;
