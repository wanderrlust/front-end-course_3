import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/users");
	const data = await response.json();
	return data;
});

const usersSlice = createSlice({
	name: "users",
	initialState: {
		users: [],
		loading: false,
		error: null,
	},
	reducers: {
		toggleUserStatus: (state, action) => {
			const user = state.users.find((user) => user.id === action.payload);
			if (user) {
				user.active = !user.active;
			}
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUsers.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchUsers.fulfilled, (state, action) => {
				state.loading = false;
				state.users = action.payload.map((user) => ({
					...user,
					active: true,
				}));
			})
			.addCase(fetchUsers.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});

export const { toggleUserStatus } = usersSlice.actions;
export default usersSlice.reducer;
