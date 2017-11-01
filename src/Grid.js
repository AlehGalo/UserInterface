import React, {Component} from 'react';
import GridBody from './GridBody';
import GridHeader from './GridHeader';

class Grid extends Component {
    constructor(props){
        super(props);
        this.calculateSum = this.calculateSum.bind(this);
    }

    calculateSum(){
        console.log("Calculate sum called");
    }

    render() {
        return (
            <table className="table">
                <GridHeader/>
                <GridBody/>
            </table>
        );
    }
}

export default Grid;