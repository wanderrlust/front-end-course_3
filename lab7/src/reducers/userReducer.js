import {
	FETCH_USERS_REQUEST,
	FETCH_USERS_SUCCESS,
	FETCH_USERS_FAIL,
	CREATE_USER_REQUEST,
	CREATE_USER_SUCCESS,
	CREATE_USER_FAIL,
} from "../actions/userActions";

const initialState = {
	users: [],
	loading: false,
	error: null,
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_USERS_REQUEST:
			return { ...state, loading: true, error: null };
		case FETCH_USERS_SUCCESS:
			return { ...state, loading: false, users: action.payload };
		case FETCH_USERS_FAIL:
			return { ...state, loading: false, error: action.payload };

		case CREATE_USER_REQUEST:
			return { ...state, loading: true, error: null };
		case CREATE_USER_SUCCESS:
			return {
				...state,
				loading: false,
				users: [...state.users, action.payload],
			};
		case CREATE_USER_FAIL:
			return { ...state, loading: false, error: action.payload };

		default:
			return state;
	}
};

export default userReducer;
