import React, { useState, useCallback, useMemo } from "react";
import Child from "./Child";

const Parent = () => {
	console.log("Parent rendered");
	const [counter, setCounter] = useState(0);
	const [text, setText] = useState(
		"Ініційований текст із стану батьківського компонента"
	);
	const [className, setClassName] = useState("");
	const [multiplier, setMultiplier] = useState(1);

	const handleClick = useCallback(() => {
		console.log("Клік на кнопці дочірнього компонента: вивід інформації з батьківського стану");
	}, []);

	const computedValue = useMemo(() => {
		console.log("Обчислення виконано");
		return counter * multiplier;
	}, [counter, multiplier]);

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
			<button onClick={() => setMultiplier(multiplier + 1)}>
				Збільшити множник
			</button>
			<p>Обчислене значення (counter * multiplier): {computedValue}</p>
			<Child onButtonClick={handleClick} text={text} class_name={className} />
		</div>
	);
};

export default Parent;
