import React, { useContext, useState, useEffect } from "react";
import "./reset.css";
import "./Style.css";

const ThemeContext = React.createContext(null);
const CounterContext = React.createContext(0);

export default function App() {
	const [theme, setTheme] = useState("light");
	const [count, setCount] = useState(0);

	useEffect(() => {
		const handleClick = () => {
			setCount((count) => count + 1);
		};

		document.addEventListener("click", handleClick);

		return () => {
			document.removeEventListener("click", handleClick);
		};
	}, [count]);

	return (
		<CounterContext.Provider value={count}>
			<ThemeContext.Provider value={theme}>
				<Form />
				<label>
					<input
						type="checkbox"
						checked={theme === "dark"}
						onClick={(e) => {
							e.stopPropagation();
						}}
						onChange={(e) => {
							setTheme(e.target.checked ? "dark" : "light");
						}}
					/>
					Змінити на темну тему
				</label>
				<CounterFixed />
			</ThemeContext.Provider>
		</CounterContext.Provider>
	);
}

const Form = () => {
	return (
		<div className="form">
			<Panel
				title="Welcome"
				text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, repudiandae. Vel fuga nisi deserunt repudiandae!"
			>
				<Button>Кнопка 1</Button>
				<Button>Кнопка 2</Button>
			</Panel>
			<Counter />
		</div>
	);
};

const Panel = ({ title, text, children }) => {
	const theme = useContext(ThemeContext);
	const className = "panel-" + theme;
	return (
		<section className={className}>
			<h1 className="title">{title}</h1>
			<p>{text}</p>
			{children}
		</section>
	);
};

const Button = ({ children }) => {
	const theme = useContext(ThemeContext);
	const className = "button-" + theme;
	return <button className={className}>{children}</button>;
};

const Counter = () => {
	const count = useContext(CounterContext);
	const theme = useContext(ThemeContext);
	const className = "counter-" + theme;

	return (
		<div className={className}>
			<h2>Кількість кліків = {count}</h2>
		</div>
	);
};

const CounterFixed = () => {
	const count = useContext(CounterContext);
	return <div className="counter-fixed">Кількість кліків = {count}</div>;
};
