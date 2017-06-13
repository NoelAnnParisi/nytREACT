import React from 'react';
import { Table } from 'reactstrap';

export default class Results extends React.Component {
  render() {
    return (
      <Table hover>
        <thead>
          <tr>
            <th>Article</th>
            <th>Save?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Article Title</td>
            <td>BUTTON HERE</td>
          </tr>
        </tbody>
      </Table>
    );
  }
  
}