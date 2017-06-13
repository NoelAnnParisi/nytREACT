import React from 'react';

const divStyle = {
	display: "flex",
	flexDirection: 'column',
	justifyContent:"center",
	alignItems: 'center',
	padding: "1%",
	textAlign: "center",
	fontFamily: 'menlo'
}

export default class Header extends React.Component {
	render(){
	  return(
		<div style={divStyle}> 
			<h2>The New York Times Article Scrubber</h2>
			<h4>Search. Discover. Save </h4>
		</div>
	  )
	}
}
