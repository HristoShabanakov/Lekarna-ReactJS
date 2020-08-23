import { fetcher, getHeaders } from './common';
const API_URL = 'https://localhost:44305/pharmacy/create';

export const getPharmacies = async (token) => {
	const headers = getHeaders(token);

	try {
		const response = await fetcher(API_URL, 'GET', headers);
		try {
			const dataToReturn = await response.json();
			return dataToReturn;
		} catch (error) {
			console.log(error);
		}
	} catch (error) {
		console.log(error);
		return null;
	}
};

export const createPharmacy = async (data, token) => {
	const headers = getHeaders(token);

	try {
		const response = await fetcher(API_URL, 'POST', headers, data);

		try {
			const dataToReturn = await response.json();
			return dataToReturn;
		} catch (error) {
			console.log(error);
		}
	} catch (error) {
		console.log(error);
		return error;
	}
};

export const getDetails = async (id, token) => {
	const headers = getHeaders(token);

	try {
		const response = await fetcher(API_URL + `/${id}`, 'GET', headers);

		const dataToReturn = await response.json();
		if (response.status === 400) {
			return { error: dataToReturn };
		}
		return dataToReturn;
	} catch (error) {
		console.log(error);
		return error;
	}
};