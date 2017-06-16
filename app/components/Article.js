import React from 'react';
import { Button } from 'reactstrap';

export default class Article extends React.Component{
	render() {
  	return(
			<tr key={this.props.article._id}>
        <td>
          <a target="_blank" 
            href={this.props.article.web_url}>
            {this.props.article.snippet}
          </a>
        </td>
        <td>
          <Button 
            ref={this.props.article._id}
            color="danger"
            onClick={() => {
              this.props.deleteArticle(this.props.article._id)}}>
            Delete
          </Button>
        </td>
      </tr>
		)
  }
} 
