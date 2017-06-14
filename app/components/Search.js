import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Table} from 'reactstrap';

export default class Search extends React.Component {
  render() {
    return (
    <div>
      <Form onSubmit={this.props.onSearch}>
        <FormGroup>
          <Label for="topic">Topic</Label>
          <Input type="text" 
            onChange={this.props.topicChanged} 
            value={this.props.q} placeholder="Topic" />
        </FormGroup>
        <FormGroup>
          <Label for="startYear">Start Year</Label>
          <Input type="text" 
            onChange={this.props.startYearChanged} 
            value={this.props.begin} placeholder="2011" />
        </FormGroup>
        <FormGroup>
          <Label for="endYear">End year</Label>
          <Input type="text" 
            onChange={this.props.endYearChanged} 
            value={this.props.end} placeholder="2015" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
      <Table hover>
        <thead>
          <tr>
            <th>Article</th>
            <th>Save this article?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Article Title</td>
            <td>BUTTON HERE</td>
          </tr>
        </tbody>
      </Table>
    </div>
    );
  }
}

