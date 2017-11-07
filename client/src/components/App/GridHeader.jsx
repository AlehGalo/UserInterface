import React, {Component} from 'react';

export default class GridHeader extends Component {

    constructor(props) {
        super(props);
        this.header = ['#', 'First Name', 'Last Name', 'Username'];
    }

    renderHeader = (val, i) => {
        return (
            <th key={i}>{val}</th>
        );
    };

    render() {
        return (
            <thead>
            <tr>
                {this.header.map((head, i) => {
                    return (this.renderHeader(head, i));
                })}
            </tr>
            </thead>
        )
    }
}