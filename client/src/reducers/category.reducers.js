import { GET_CATEGORIES, CATEGORY_ERROR } from "../constants/actions";
const initialState = {
	categories: [],
	category: null,
	isLoading: false,
	error: {},
};

export default function (state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case GET_CATEGORIES:
			return {
				...state,
				categories: payload,
			};
		case CATEGORY_ERROR:
			return {
				isLoading: false,
				categories: [],
				category: null,
				error: payload,
			};
		default:
			return state;
	}
}