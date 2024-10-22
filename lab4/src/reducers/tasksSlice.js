import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
	name: "tasks",
	initialState: [],
	reducers: {
		addTask: (state, action) => {
			state.push(action.payload);
		},
		removeTask: (state, action) => {
			return state.filter((task) => task.id !== action.payload.id);
			// const index = state.findIndex((task) => task.id === action.payload.id)
			// if (index !== -1) {
			// 	state.splice(index, 1);
			// }
		},
	},
});

export const { addTask, removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;
