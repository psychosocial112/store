import axios from "axios";
import { GET_CATEGORIES, CATEGORY_ERROR } from "../constants/actions";

export const getCATEGORIES = () => async (dispatch) => {
	try {
		const res = await axios.get("/categories");
		dispatch({
			type: GET_CATEGORIES,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: CATEGORY_ERROR,
			payload: err,
		});
	}
};