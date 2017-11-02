import React, {Component} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

class App extends Component {

    constructor(p) {
        super(p);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.state = {sidebarClassName : "toggled"};
        this.hide = false;
    }

    toggleMenu() {
        this.setState({sidebarClassName : this.hide ? "toggled" : ""});
        this.hide = !this.hide;
    }

    render() {
        return (
            <div id="wrapper" className={this.state.sidebarClassName}>
                <Sidebar/>
                <MainContent onToggleClick={this.toggleMenu}/>
            </div>
        );
    }
}

export default App;
