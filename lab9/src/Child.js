import React from "react";
import Grandchild from "./Grandchild";

const Child = ({ text, class_name, onButtonClick }) => {
	return (
		<div className="child">
			<h2>Дочірній компонент</h2>
			<button onClick={onButtonClick}>Натисніть мене</button>
			<Grandchild text={text} class_name={class_name}/>
		</div>
	);
};

export default Child;
