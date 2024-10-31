import axios from "axios";

export const fetchUsers = () => {
	return async (dispatch) => {
		dispatch({ type: "FETCH_USERS_REQUEST" });
		try {
			const resp = await axios.get("https://reqres.in/api/users");
			dispatch({ type: "FETCH_USERS_SUCCESS", payload: resp.data.data });
		} catch (error) {
			dispatch({ type: "FETCH_USERS_FAIL", payload: error.message });
		}
	};
};
