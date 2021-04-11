import React from "react";
import { Container } from "react-bootstrap";
// GitText komponenta se koristi na poveke mesta
import GitText from "../elements/GitTextLoader";
//
// About stranata, ovde se koristi komponentata za prevzemawe na tekst od git-hub.  
//
export const About = () =>{

	return(
		<Container style={{ display: "flex", flexWrap: "wrap",alignContent: "center", maxWidth:"800px" }}>
				<GitText textFile={"AboutUs.md"} />
		</Container>
	)
}

export default About;
