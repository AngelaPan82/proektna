import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import { Container, Card } from "react-bootstrap";

const axParam = {
					// Link to About.md on github repositories 
  baseURL: "https://raw.githubusercontent.com/AngelaPan82/proektna/master/public/text/AboutUs.md",
	headers: {
		"Content-type": "application/text"
	}
};

const axi = axios.create(axParam);
  
export const About = () =>{
	const [rdm, setRdm] = useState('Loading Abnout.md');
	
	useEffect(() => {
		axi.get()
    .then((response) => { 
      setRdm(response.data);
    })
    .catch((error) => {
        console.warn(error);
    });
	},[]);

	return(
		<Container style={{ display: "flex", flexWrap: "wrap",alignContent: "center", maxWidth:"800px" }}>
			<Card style={{marginTop:"1.5em", padding: "3em"}}>
				<ReactMarkdown source={rdm} />
			 </Card>
		</Container>
	)
}

export default About;