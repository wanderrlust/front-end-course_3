import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
	const [count, setCount] = useState(0);
	const increment = () => setCount(count + 1);

	return (
		<div className="counter-container">
			<h1 className="counter-value">Лічильник: {count}</h1>
			<button className="counter-button" onClick={increment}>
				Збільшити
			</button>
		</div>
	);
};

export default Counter;
