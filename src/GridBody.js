import React, {Component} from 'react';

class GridBody extends Component {

    constructor(props){
        super(props);
        this.renderRow = this.renderRow.bind(this);
    }

    renderRow(i, p){
        return (<tr key={i}>
            <th scope="row">{p[0]}</th>
            <td>{p[1]}</td>
            <td>{p[2]}</td>
            <td>{p[3]}</td>
        </tr>)
    }

    render() {
        return (
                <tbody>
                {this.props.rows.map((r, i)=>this.renderRow(i, r))}
                </tbody>
        );
    }
}

export default GridBody;