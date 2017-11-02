import React, {Component} from 'react';
import Grid from "./Grid";

class MainContent extends Component {

    constructor(props) {
        super(props);
        this.onDetailsClick = this.onDetailsClick.bind(this);
        this.state = {rows: [[]]};
    }

    onDetailsClick() {

        let numberOfItems = 5000;

        let array = new Array();

        let p = performance.now();

        for (let i = 0; i < numberOfItems; i++) {
            array[i] = new Array();
            for (let j = 0; j < 4; j++) {
                array[i][j] = i + " " + j;
            }
        }

        this.setState({rows: array});

        console.log(performance.now() - p + " ms")
        console.log(new Date());
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(new Date());

    }

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

export default MainContent;