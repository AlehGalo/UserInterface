import React, {Component} from 'react';

class GridHeader extends Component {

    constructor(props) {
        super(props);
        this.header = ['#', 'First Name', 'Last Name', 'Username'];
        this.renderHeader = this.renderHeader.bind(this);
    }

    renderHeader(val, i) {
        return (
            <th key={i}>{val}</th>
        );
    }

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

export default GridHeader;