import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import ItemList from "./components/ItemList";
import "./Style.css";
import AddItemForm from "./components/AddItemForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
function App() {
    const [items, setItems] = useState([]);

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
