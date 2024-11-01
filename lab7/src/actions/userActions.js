import axios from "axios";

export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAIL = "FETCH_USERS_FAIL";

export const CREATE_USER_REQUEST = "CREATE_USER_REQUEST";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_FAIL = "CREATE_USER_FAIL";

export const fetchUsers = () => {
	return async (dispatch) => {
		dispatch({ type: FETCH_USERS_REQUEST });
		try {
			const resp = await axios.get("https://reqres.in/api/users");
			dispatch({ type: FETCH_USERS_SUCCESS, payload: resp.data.data });
			console.log(resp.data.data)
		} catch (error) {
			dispatch({ type: FETCH_USERS_FAIL, payload: error.message });
		}
	};
};

export const createUser = (userData) => async (dispatch) => {
	dispatch({ type: CREATE_USER_REQUEST });
	try {
		const resp = await axios.post("https://reqres.in/api/users", userData);
		dispatch({ type: CREATE_USER_SUCCESS, payload: resp.data });
	} catch (error) {
		dispatch({ type: CREATE_USER_FAIL, payload: error.message });
	}
};
