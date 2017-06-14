import React from 'react';
import { Button, Table } from 'reactstrap';

export default class Results extends React.Component {
  render() {
    return (
      <Table hover>
        <thead>
          <tr>
            <th>Article</th>
            <th>Save article?</th>
          </tr>
        </thead>
        <tbody>
          {this.props.articles.map((article) => {
            return (
              <tr key={article.pub_date}>
                <td>
                  <a href={article.web_url}>
                    {article.snippet}
                  </a>
                </td>
                <td>
                  <Button color="success">Save</Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    )
  }
}
