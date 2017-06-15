import React from 'react';
import { Table, Button } from 'reactstrap';

export default class SavedArticles extends React.Component {
  render() {
  	this.props.getSavedArticles
    return (
      <Table hover>
        <thead>
          <tr>
            <th>Saved Articles</th>
            <th>Delete?</th>
          </tr>
        </thead>
        <tbody>
			<tr>
				<th>Something</th>
			</tr>
        </tbody>
      </Table>
    );
  }
}

// {this.props.getSavedArticles().map((article) => {
//             return (
// 	            <tr key={article.pub_date}>
// 	                <td>
// 	                	<a target="_blank" href={article.web_url}>
// 	                    	{article.snippet}
// 	                	</a>
// 	                </td>
// 					<td>
// 						<Button color="danger">Delete</Button>
// 					</td>
// 				</tr>
// 				)
// 			})
// 		}