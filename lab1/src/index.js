import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import ItemList from "./components/ItemList";
import "./Style.css";
import AddItemForm from "./components/AddItemForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
function App() {
	const startItems = [
		{
			title: "Title 1",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque condimentum ante nisi, nec convallis lacus pretium vel. Donec facilisis nunc ac massa dictum, ac convallis felis fringilla. Maecenas ut felis sit amet ex molestie interdum. Sed sit amet dui libero.",
		},
		{
			title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque condimentum ante nisi",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque condimentum ante nisi, nec convallis lacus pretium vel. Donec facilisis nunc ac massa dictum, ac convallis felis fringilla. Maecenas ut felis sit amet ex molestie interdum. Sed sit amet dui libero.",
		},
		{
			title: "Title 3 Lorem ipsum dolor sit",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque condimentum ante nisi, nec convallis lacus pretium vel. Donec facilisis nunc ac massa dictum, ac convallis felis fringilla. Maecenas ut felis sit amet ex molestie interdum. Sed sit amet dui libero.",
		},
	];
	const [items, setItems] = useState(startItems);

	const handleAddItem = (newItem) => {
		setItems([...items, newItem]);
	};

	return (
		<div className="wrap">
			<ItemList items={items}></ItemList>
			<AddItemForm onAddItem={handleAddItem}></AddItemForm>
		</div>
	);
}
root.render(<App />);
