import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Button } from 'reactstrap';

const divStyle = {
	display: "flex",
	flexDirection: 'column',
	justifyContent:"space-around",
	padding: "1%",
	textAlign: "center",
	fontFamily: 'menlo'
}

const title ={
	fontWeight:'bold',
	marginBottom:'2%'
}

const buttonStyle = {
	flexDirection:'row',
	marginTop:'1%',
	marginBottom:'3%'
}

const buttonOne = {
	margin:'3%'
}

export default class Header extends React.Component {
	render(){
	  return(
		<div style={divStyle}> 
			<h2 style={title}>The New York Times Archives</h2>
			<h4>Search. Discover. Save </h4>
			<div style={buttonStyle}>
				<Link to={`/search`}>
				    <Button color="secondary" style={buttonOne} size="lg">Show Search</Button>
				</Link>
				<Link to={`/saved`}>
				    <Button color="secondary" size="lg">Show Saved</Button>
			    </Link>
			</div>
		</div>
	  )
	}
}
