import React from "react";

const Grandchild = ({ text, class_name }) => {
	return (
		<div className={"grandchild " + class_name}>
			<h3>Компонент-онук</h3>
			<p>{text}</p>
		</div>
	);
};

export default Grandchild;
