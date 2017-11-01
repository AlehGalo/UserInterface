import React, {Component} from 'react';
import logo from './logo.svg';

class Sidebar extends Component {
    render() {
        return (
            <div id="sidebar-wrapper">
                <ul className="sidebar-nav">
                    <li className="sidebar-brand">
                        <img src={logo} className="App-logo" alt="logo"/>
                    </li>
                    <br/>
                    <li>
                        <a href="../public/index.html">Dashboard</a>
                    </li>
                    <li>
                        <a href="../public/index.html">Shortcuts</a>
                    </li>
                    <li>
                        <a href="../public/index.html">Overview</a>
                    </li>
                    <li>
                        <a href="../public/index.html">Events</a>
                    </li>
                    <li>
                        <a href="../public/index.html">About</a>
                    </li>
                    <li>
                        <a href="../public/index.html">Services</a>
                    </li>
                    <li>
                        <a href="../public/index.html">Contact</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Sidebar;