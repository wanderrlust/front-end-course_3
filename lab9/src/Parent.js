import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
	const [counter, setCounter] = useState(0);
	const [text, setText] = useState(
		"Ініційований текст із стану батьківського компонента"
	);
	const [className, setClassName] = useState("");

	const handleClick = () => {
		console.log("Клік на кнопці дочірнього компонента: вивід інформації з батьківського стану");
	};

	return (
		<div className="parent">
			<h1>Батьківський компонент</h1>
			<p>Counter: {counter}</p>
			<button onClick={() => setCounter(counter + 1)}>
				Збільшити лічильник
			</button>
			<button
				onClick={() => {
					setText("Змінений текст через батьківський компонент");
					setClassName("parent-style");
				}}
			>
				Змінити текст
			</button>
			<Child onButtonClick={handleClick} text={text} class_name={className} />
		</div>
	);
};

export default Parent;
