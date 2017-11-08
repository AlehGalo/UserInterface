import React, {Component} from 'react';

export default class GridBody extends Component {

    renderRow = (i, p) => {
        return (<tr key={i}>
            <th scope="row">{p['_id']}</th>
            <td>{p['firstName']}</td>
            <td>{p['lastName']}</td>
            <td>{p['userName']}</td>
        </tr>)
    };

    render() {
        return (
                <tbody>
                {this.props.rows.map((r, i)=>this.renderRow(i, r))}
                </tbody>
        );
    }
}