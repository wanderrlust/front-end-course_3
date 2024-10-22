import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, removeTask } from "../reducers/tasksSlice";

export default function Tasks() {
	const tasks = useSelector((state) => state.tasks);
	const dispatch = useDispatch();
	const [taskName, setTaskName] = useState("");
	const [taskText, setTaskText] = useState("");

	const handleAddTask = () => {
		dispatch(addTask({ id: Date.now(), name: taskName, text: taskText }));
		setTaskName("");
		setTaskText("");
	};

	const handleRemoveTask = (task) => {
		dispatch(removeTask(task));
	};

	return (
		<div className="forma">
			<div className="inputs-wrap">
				<input
					placeholder="Введіть назву завдання"
					value={taskName}
					type="text"
					onChange={(e) => setTaskName(e.target.value)}
				/>
				<textarea
					placeholder="Введіть текст завдання"
					value={taskText}
					onChange={(e) => setTaskText(e.target.value)}
				/>
				<button id="btn-add" onClick={handleAddTask}>
					Add new TASK
				</button>
			</div>
			<ul className="tasks-list">
				{tasks.map((task) => (
					<li key={task.id}>
						<div>
							<div className="task-name">{task.name}</div>
							<p className="task-text">{task.text}</p>
						</div>
						<button className="btn-remove" onClick={() => handleRemoveTask(task)}>
							Remove task
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
