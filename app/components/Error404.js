import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

const Error404 = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-2">Oh no...</h1>
        <p className="lead">Why don't we head back?</p>
        <hr className="my-2" />
          <Button color="secondary">Home</Button>
      </Jumbotron>
    </div>
  );
};

export default Error404;
