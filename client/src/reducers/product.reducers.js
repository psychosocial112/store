import { GET_PRODUCTS,  GET_PRODUCT, PRODUCT_ERROR } from "../constants/actions";
const initialState = {
	products: [],
	product: null,
	isLoading: false,
	error: {},
};

export default function (state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case GET_PRODUCTS:
			return {
				...state,
				products: payload,
			};
		case GET_PRODUCT:
			return {
				...state,
				product: payload,
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