import React from "react";

const Grandchild = ({ text }) => {
	return (
		<div className="grandchild">
			<h3>Компонент-онук</h3>
			<p>{text}</p>
		</div>
	);
};

export default Grandchild;
