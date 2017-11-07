import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

export default class App extends React.Component {

    constructor(p) {
        super(p);
        this.state = {sidebarClassName : "toggled"};
        this.hide = false;
    }

    toggleMenu = () => {
        this.setState({sidebarClassName : this.hide ? "toggled" : ""});
        this.hide = !this.hide;
    };

    render() {
        return (
            <div id="wrapper" className={this.state.sidebarClassName}>
                <Sidebar/>
                <MainContent onToggleClick={this.toggleMenu}/>
            </div>
        );
    }
}