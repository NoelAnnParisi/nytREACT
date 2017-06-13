import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';

export default class Search extends React.Component {

	handleSubmitClick(e){ 
		e.preventDefault(); 
		let formValues = this.props.value
		let params = Object.assign(formValues, {'api-key': "1a4eb9efe5cb45c3b875a4fcef1683ca"}) 
		params.begin_date = `${params.begin_date}0101`; 
		params.end_date = `${params.end_date}1231`; 
		axios({ method:'get', baseURL: `https://api.nytimes.com/svc/search/v2/articlesearch.json?`, 
			params: params, 
			responseType: 'json', })
		.then(data => { 
			console.log(`data: ${JSON.stringify(data, null, 2)}`); 
		}); 
	}
  render() {
    return (
      <Form onSubmit={this.handleSubmitClick}>
        <FormGroup>
          <Label for="exampleEmail">Topic</Label>
          <Input type="text" name="q" id="query" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Start Year</Label>
          <Input type="text" name="begin_date" id="startYear" placeholder="password placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">End year</Label>
          <Input type="text" name="end_date" id="endYear" placeholder="password placeholder" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

