import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home () {
	const [ selectedColor, serSelectedColor ] = useState("red");

	return (
		<div className="traffic-light">
		
			<div
			onClick={() => serSelectedColor ("red")} className={"light red"+((selectedColor === "red") ? " glow": "")}></div>
			<div 
			onClick={() => serSelectedColor ("yellow")} className={"light yellow"+((selectedColor === "yellow") ? " glow": "")}></div>
			<div 
			onClick={() => serSelectedColor ("green")} className={"light green"+((selectedColor === "green") ? " glow": "")}></div>
		</div>
	);
};

export default Home;
