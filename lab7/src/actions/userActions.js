import axios from "axios";

export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAIL = "FETCH_USERS_FAIL";

export const CREATE_USER_REQUEST = "CREATE_USER_REQUEST";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_FAIL = "CREATE_USER_FAIL";

export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAIL = "UPDATE_USER_FAIL";

export const DELETE_USER_REQUEST = "DELETE_USER_REQUEST";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAIL = "DELETE_USER_FAIL";

export const fetchUsers = () => {
	return async (dispatch) => {
		dispatch({ type: FETCH_USERS_REQUEST });
		try {
			const resp = await axios.get("https://reqres.in/api/users");
			dispatch({ type: FETCH_USERS_SUCCESS, payload: resp.data.data });
			console.log("ДАНІ ЗАВАНТАЖЕНІ =>", resp.data.data);
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
		console.log("ДАНІ ДОДАНІ =>", resp.data);
	} catch (error) {
		dispatch({ type: CREATE_USER_FAIL, payload: error.message });
	}
};

export const updateUser = (id, userData) => async (dispatch) => {
	dispatch({ type: UPDATE_USER_REQUEST });
	try {
		const resp = await axios.put(
			`https://reqres.in/api/users/${id}`,
			userData
		);
		dispatch({ type: UPDATE_USER_SUCCESS, payload: { id, ...resp.data } });
		console.log("ДАНІ ЗМІНЕНІ =>", resp.data);
	} catch (error) {
		dispatch({ type: UPDATE_USER_FAIL, payload: error.message });
	}
};


export const deleteUser = (id) => async (dispatch) => {
	dispatch({ type: DELETE_USER_REQUEST });
	try {
		await axios.delete(
			`https://reqres.in/api/users/${id}`
		);
		dispatch({ type: DELETE_USER_SUCCESS, payload: id });
		console.log("ДАНІ ВИДАЛЕНІ ДЛЯ =>", id);
	} catch (error) {
		dispatch({ type: DELETE_USER_FAIL, payload: error.message });
	}
};
