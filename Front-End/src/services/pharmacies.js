import { fetcher, getHeaders } from './common';
const API_URL = 'https://localhost:44305/pharmacy';

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
		const response = await fetcher(API_URL + '/create', 'POST', headers, data);

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

export const getDetails = async (token) => {
	const headers = getHeaders(token);

	try {
		const response = await fetcher(API_URL , 'GET', headers);

		const dataToReturn = await response.json();
		if (response.status === 400) {
			return { error: dataToReturn };
		}
		return dataToReturn.length > 0 ? dataToReturn[0] : null;
	} catch (error) {
		console.log(error);
		return error;
	}
};

export const editPharmacy = async (data, token) => {
	const headers = getHeaders(token);
	const response = await fetcher(API_URL,'PUT', headers, data);
	
	return response.status===200
};