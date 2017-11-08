import React, {Component} from 'react';
import Grid from './Grid';
import 'whatwg-fetch';

export default class MainContent extends Component {

    constructor(props) {
        super(props);
        this.state = {rows: [[]]};
    }

    onDetailsClick = () => {
        let scope = this;
        fetch('/grid').then(function (response) {
            return response.json();
        }).then(function(array){
            console.log(array);
            scope.setState({rows: array})
        });
    };

    render() {
        return (
            <div id="page-content-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-1">
                            <a className="btn btn-default" id="menu-toggle"
                               onClick={this.props.onToggleClick}>Toggle Menu</a>
                        </div>
                        <div className="col-xs-1">
                            <a className="btn btn-default" onClick={this.onDetailsClick}>Refresh Data</a>
                        </div>
                        <div className="col-xs-1">
                            Select number
                        </div>
                        <Grid rows={this.state.rows}/>
                    </div>
                </div>
            </div>
        );
    }
}