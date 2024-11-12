import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
	const [count, setCount] = useState(0);
	const increment = () => setCount(count + 1);
	const reset = () => setCount(0);

	return (
		<div className="counter-container">
			<h1 className="counter-value">Лічильник: {count}</h1>
			<div className="counter-btns">
				<button className="counter-button" onClick={increment}>
					Збільшити
				</button>
				<button className="counter-button" onClick={reset}>
					Скинути
				</button>
			</div>
		</div>
	);
};

export default Counter;
