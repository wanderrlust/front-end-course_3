import React from "react";
import Grandchild from "./Grandchild";

const Child = ({ text }) => {
	return (
		<div className="child">
			<h2>Дочірній компонент</h2>
			<Grandchild text={text} />
		</div>
	);
};

export default Child;
