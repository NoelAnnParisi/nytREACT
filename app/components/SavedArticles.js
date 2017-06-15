import React from 'react';
import { Table, Button } from 'reactstrap';
import axios from 'axios';

export default class SavedArticles extends React.Component { 
	// componentWillMount(){
	//  	 	axios({
	// 		method:'get',
	// 		baseURL:'/api',
	// 	}).then(data => {
	// 		console.log(`${JSON.stringify(data)}`);
	// 	})
	//  }
	render() {
		return (
		  <Table hover>
		    <thead>
		      <tr>
		        <th>Saved Articles</th>
		        <th>Delete?</th>
		      </tr>
		    </thead>
		    <tbody>
				{this.props.update(this.props.savedData)}
		    </tbody>
		  </Table>
		)
	}
}
