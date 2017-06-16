import React from 'react';
import { Table, Button } from 'reactstrap';
import axios from 'axios';

const savedStyle = {
	fontFamily: 'menlo'
}

export default class SavedArticles extends React.Component { 
	render() {
		return (
		  <Table style={savedStyle} hover>
				{this.props.update(this.props.savedData)}
		  </Table>
		)
	}
}
