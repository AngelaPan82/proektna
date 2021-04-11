import React from "react";
import { Container } from "react-bootstrap";
import GitText from "../elements/GitTextLoader";
  
export const About = () =>{

	return(
		<Container style={{ display: "flex", flexWrap: "wrap",alignContent: "center", maxWidth:"800px" }}>
				<GitText textFile={"AboutUs.md"} />
		</Container>
	)
}

export default About;
