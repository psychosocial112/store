import axios from "axios";
import  { useState } from "react";
import { useParams } from "react-router-dom";
import { GET_PRODUCTS, GET_PRODUCT, PRODUCT_ERROR } from "../constants/actions";

export const getProducts = () => async (dispatch) => {
	try {
		const res = await axios.get("/products");
		dispatch({
			type: GET_PRODUCTS,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: PRODUCT_ERROR,
			payload: err,
		});
	}
};

export const getProduct = (slug) => async (dispatch) => {
	try {
		const res = await axios.get(`/products/${slug}`);
		dispatch({
			type: GET_PRODUCT,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: PRODUCT_ERROR,
			payload: err,
		});
	}
};