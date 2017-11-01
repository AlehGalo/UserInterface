import React, {Component} from 'react';
import Grid from "./Grid";

class MainContent extends Component {

    constructor(p){
        super(p);
        this.toggleSidebar = this.toggleSidebar.bind(this);
    }

    toggleSidebar(){
    }

    render() {
        return (
            <div id="page-content-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <Grid/>
                            <a className="btn btn-default" id="menu-toggle"
                               onClick={this.toggleMenu}>Toggle Menu</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainContent;