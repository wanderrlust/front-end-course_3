import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
	const [counter, setCounter] = useState(0);
	const [text, setText] = useState(
		"Ініційований текст із стану батьківського компонента"
	);

	return (
		<div className="parent">
			<h1>Батьківський компонент</h1>
			<p>Counter: {counter}</p>
			<button onClick={() => setCounter(counter + 1)}>
				Збільшити лічильник
			</button>
			<button
				onClick={() =>
					setText("Змінений текст через батьківський компонент")
				}
			>
				Змінити текст
			</button>
			<Child text={text} />
		</div>
	);
};

export default Parent;
