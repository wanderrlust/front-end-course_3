import React, { useState } from "react";
import "./reset.css";
import "./index.css";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "./graphql/GET_CHARACTERS";

export default function App() {
	const { loading, error, data } = useQuery(GET_CHARACTERS);
	const [editingCharacterId, setEditingCharacterId] = useState(null);
	const [updatedCharacters, setUpdatedCharacters] = useState([]);
	const [editedFields, setEditedFields] = useState({});

	React.useEffect(() => {
		if (data) {
			setUpdatedCharacters(data.characters.results);
		}
	}, [data]);

	const handleEditClick = (character) => {
		setEditingCharacterId(character.id);
		setEditedFields({ ...character });
	};

	const handleFieldChange = (field, value) => {
		setEditedFields((prevFields) => ({
			...prevFields,
			[field]: value,
		}));
	};

	const handleUpdateCharacter = (id) => {
		setUpdatedCharacters((prevCharacters) =>
			prevCharacters.map((character) =>
				character.id === id ? { ...editedFields } : character
			)
		);
		setEditingCharacterId(null);
	};

	// Функция для удаления персонажа
	const handleDeleteCharacter = (id) => {
		setUpdatedCharacters((prevCharacters) =>
			prevCharacters.filter((character) => character.id !== id)
		);
	};

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	return (
		<>
			<h1>Characters List</h1>
			{updatedCharacters.map((character) => (
				<div key={character.id} className="character-card">
					{editingCharacterId === character.id ? (
						<>
							<ul className="character-details">
								<li>
									<strong>NAME: </strong>
									<input
										type="text"
										value={editedFields.name || ""}
										onChange={(e) =>
											handleFieldChange(
												"name",
												e.target.value
											)
										}
										className="edit-input"
									/>
								</li>
								<li>
									<strong>GENDER: </strong>
									<input
										type="text"
										value={editedFields.gender || ""}
										onChange={(e) =>
											handleFieldChange(
												"gender",
												e.target.value
											)
										}
										className="edit-input"
									/>
								</li>
								<li>
									<strong>SPECIES: </strong>
									<input
										type="text"
										value={editedFields.species || ""}
										onChange={(e) =>
											handleFieldChange(
												"species",
												e.target.value
											)
										}
										className="edit-input"
									/>
								</li>
								<ul className="character-episodes">
									<div
										style={{
											fontSize: 16,
											fontWeight: "bold",
										}}
									>
										ПОКАЗ У ЕПІЗОДАХ:
									</div>
									{character.episode.map((ep, index) => (
										<li key={index}>
											<strong>{ep.episode}</strong>{" "}
											{ep.name}
										</li>
									))}
								</ul>
							</ul>
							<div className="buttons">
								<button
									className="save"
									onClick={() =>
										handleUpdateCharacter(character.id)
									}
								>
									✔
								</button>
								<button
									className="cancel"
									onClick={() => setEditingCharacterId(null)}
								>
									✘
								</button>
							</div>
						</>
					) : (
						<>
							<ul className="character-details">
								<li className="character-name">
									<strong>NAME: </strong>
									{character.name}
								</li>
								<li className="character-gender">
									<strong>GENDER: </strong>
									{character.gender}
								</li>
								<li className="character-species">
									<strong>SPECIES: </strong>
									{character.species}
								</li>
								<ul className="character-episodes">
									<div
										style={{
											fontSize: 16,
											fontWeight: "bold",
										}}
									>
										ПОКАЗ У ЕПІЗОДАХ:
									</div>
									{character.episode.map((ep, index) => (
										<li key={index}>
											<strong>{ep.episode}</strong>{" "}
											{ep.name}
										</li>
									))}
								</ul>
							</ul>
							<div className="buttons">
								<button
									className="edit"
									onClick={() => handleEditClick(character)}
								>
									🖍
								</button>
								<button
									className="delete"
									onClick={() =>
										handleDeleteCharacter(character.id)
									}
								>
									🗑
								</button>
							</div>
						</>
					)}
				</div>
			))}
		</>
	);
}
