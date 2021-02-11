import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import { Container } from "react-bootstrap";

const axParam = {
 		// Link to Home.md on github repositories
  baseURL: "https://raw.githubusercontent.com/AngelaPan82/proektna/main/Home.md",
  headers: {"Content-type": "application/text"}
}; 
// dfsdfsdfsfd
//dfdf 
const axi = axios.create(axParam);
  
export const Home = () =>{
	const [ homeTekst, setHomeTekst ] = useState('Read-me.md');

	useEffect(() => {

		axi.get()
    		.then((resp) => { 
				setHomeTekst(resp.data);
    		})
    	.catch((error) => {
        	console.warn(error);
    	});

	},[]);

	return(
		<Container style={{marginTop:"1.5em"}}>
			<div>
				<ReactMarkdown source={homeTekst} />
			</div> 
		</Container>
	)
}
