import React from "react";
import Background from '../elements/Background'
import GitText from "../elements/GitTextLoader";
  
function Home(){

	return(
		<div>
			<Background />
			<GitText textFile="AboutUs.md"></GitText>  
		</div>
	)
}

export default Home;