import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import { Card } from "react-bootstrap";

const axParam = {
  // Link to About.md on github repositories 
  baseURL: "https://raw.githubusercontent.com/AngelaPan82/proektna/master/public/text/",
  headers: {
	"Content-type": "application/text"
  }
};

const axi = axios.create(axParam);
//
// Prevzemanje na tekst direktno od GitHub kako props parametar se dobiva textFile od komponentata od kade se povikuva
// 
export const GitText = (props) =>{
	const [rdm, setRdm] = useState('Loading '+ props.textFile);
	
	useEffect(() => {
	axi.get(props.textFile)
    		.then((response) => { 
      			setRdm(response.data);
    		})
    		.catch((error) => {
        		console.warn(error);
   		 });
	},[props.textFile]);

return(
	<Card style={{marginTop:"1.5em", padding: "3em"}}>
		<ReactMarkdown source={rdm} />
	</Card>
      )
}

export default GitText;
