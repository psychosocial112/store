import {
	GET_PRODUCT,
	GET_PRODUCTS,
	PRODUCT_ERROR,
	PRODUCT_LOADING,
} from "../constants/actions";
const initialState = {
	products: [],
	product: null,
	isLoading: false,
	error: {},
};
export default function (state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case PRODUCT_LOADING:
			return {
				...state,
				isLoading: true,
			};
		case GET_PRODUCTS:
			return {
				...state,
				products: payload,
				isLoading: false,
			};
		case GET_PRODUCT:
			return {
				...state,
				product: payload,
				isLoading: false,
			};
		case PRODUCT_ERROR:
			return {
				isLoading: false,
				products: [],
				product: null,
				error: payload,
			};
		default:
			return state;
	}
}