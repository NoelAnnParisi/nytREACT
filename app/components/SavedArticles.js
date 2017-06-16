import React from 'react';
import { Table, Button } from 'reactstrap';
import axios from 'axios';

export default class SavedArticles extends React.Component { 
	render() {
		return (
		  <Table hover>
		    <thead>
		      <tr>
		        <th>Saved Articles</th>
		        <th>Delete?</th>
		      </tr>
		    </thead>
				{this.props.update(this.props.savedData)}
		  </Table>
		)
	}
}
