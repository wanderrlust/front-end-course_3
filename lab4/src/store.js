import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./reducers/tasksSlice";
import usersSlice from "./reducers/usersSlice";

export default configureStore({
	reducer: {
		tasks: tasksSlice,
		users: usersSlice,
	},
});
