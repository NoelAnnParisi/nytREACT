import React from 'react';
import { Button, Table } from 'reactstrap';

export default class Results extends React.Component {
  render() {
    return (
       <Table data={this.props.data} hover>
        <thead>
          <tr>
            <th>Article</th>
            <th>Save article?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Article</td>
            <td>{this.data}</td>
          </tr>
        </tbody>
      </Table>
    )
  }
}
