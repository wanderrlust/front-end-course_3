import { useState } from "react";

export default function AddItemForm({onAddItem}) {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		const newItem = {
			title: title,
			description: description,
		};

		onAddItem(newItem);

		setTitle("");
		setDescription("");
	};

	return (
		<form className="add_item_form" onSubmit={handleSubmit}>
			<div>
				<label className="form_label" htmlFor="set_title">
					Напишіть назву
				</label>
				<input
					className="form_input"
					id="set_title"
					type="text"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				></input>
			</div>
			<div>
				<label className="form_label" htmlFor="set_description">
					Напишіть опис
				</label>
				<textarea
					className="form_textarea"
					id="set_description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				></textarea>
			</div>
			<button className="form_button" type="submit">
				Додати айтем у список
			</button>
		</form>
	);
}
