import React from 'react';
import { Table } from 'reactstrap';

export default class SavedArticles extends React.Component {
  render() {
    return (
      <Table hover>
        <thead>
          <tr>
            <th>Article</th>
            <th>Delete?</th>
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