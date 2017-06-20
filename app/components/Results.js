import React from 'react';
import { Button, Table } from 'reactstrap';

const resultsStyle = {
    fontFamily: 'menlo',
    border:'none',
    marginTop:'5%'
}

export default class Results extends React.Component {
  render() {
    return (
      <Table style={resultsStyle} hover>
        <tbody>
          {this.props.articles.map((article) => {
            console.log(`${JSON.stringify(article, null,2)}`);
            return (
              <tr key={article.pub_date}>
                <td>
                  <a target="_blank" href={article.web_url}>
                    {article.snippet}
                  </a>
                </td>
                <td>
                  <Button color="success" 
                    onClick={
                      () => {
                        const dataObj = {
                          snippet: article.snippet,
                          pub_date: article.pub_date,
                          web_url: article.web_url
                        }
                      this.props.saveArticle(dataObj);
                      this.props.getArticleSetState;
                      }
                    }>Save</Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    )
  }
}
