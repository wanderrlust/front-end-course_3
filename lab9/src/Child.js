import React from "react";
import Grandchild from "./Grandchild";

const Child = () => {
	return (
		<div className="child">
			<h2>Дочірній компонент</h2>
			<Grandchild />
		</div>
	);
};

export default Child;
