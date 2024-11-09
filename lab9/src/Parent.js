import React from "react";
import Child from "./Child";

const Parent = () => {
	return (
		<div className="parent">
			<h1>Батьківський компонент</h1>
			<p>Counter: </p>
			<button>Збільшити лічильник</button>
			<button>Змінити текст</button>
			<Child />
		</div>
	);
};

export default Parent;
