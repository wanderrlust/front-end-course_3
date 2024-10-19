import React, { useContext, useState } from "react";

const ThemeContext = React.createContext(null);

export default function App() {
	const [theme, setTheme] = useState("light");

	return (
		<ThemeContext.Provider value={theme}>
			<Form />
			<label>
				<input
					type="checkbox"
					checked={theme === "dark"}
					onChange={(e) => {
						setTheme(e.target.checked ? "dark" : "light");
					}}
				/>
				Змінити на темну тему
			</label>
		</ThemeContext.Provider>
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