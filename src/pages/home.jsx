import React from "react";
import Background from '../elements/Background'
import GitText from "../elements/GitTextLoader";

// ova go prikazuva home ekranot
// pozadinata i tekstot AboutAs.md
function Home(){

	return(
		<div>
			<Background />
			<GitText textFile="AboutUs.md"></GitText>  
		</div>
	)
}

export default Home;
