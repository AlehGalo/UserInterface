import React, {Component} from 'react';
import GridBody from './GridBody';
import GridHeader from './GridHeader';

export default class Grid extends Component {
    render() {
        return (
            <table className="table">
                <GridHeader/>
                <GridBody rows={this.props.rows}/>
            </table>
        );
    }
}