import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./reducers/tasksSlice";

export default configureStore({
	reducer: {
		tasks: tasksSlice
	},
});
