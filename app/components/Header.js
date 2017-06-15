import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Button } from 'reactstrap';

const divStyle = {
	display: "flex",
	flexDirection: 'column',
	justifyContent:"center",
	alignItems: 'center',
	padding: "1%",
	textAlign: "center",
	fontFamily: 'menlo'
}

const buttonStyle = {
	flexDirection:'row'
}

export default class Header extends React.Component {
	render(){
	  return(
		<div style={divStyle}> 
			<h2>The New York Times Article Scrubber</h2>
			<h4>Search. Discover. Save </h4>
			<div style={buttonStyle}>
				<Link to={`/search`}>
				    <Button color="secondary" size="lg">Show Search</Button>
				</Link>
				<Link to={`/saved`}>
				    <Button color="secondary" size="lg">Show Saved</Button>
			    </Link>
			</div>
		</div>
	  )
	}
}
