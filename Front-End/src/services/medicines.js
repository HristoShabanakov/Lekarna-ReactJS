import { fetcher, getHeaders } from './common';
const API_URL = 'https://localhost:44305/medicine';

export const createMedicine = async (data, token) => {
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

export const getMedicines = async (token) => {
	const headers = getHeaders(token);

	try {
		const response = await fetcher(API_URL + '/all', 'GET', headers);
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

export const deleteMedicine = async (token, data) => {
	const headers = getHeaders(token);

	try {
		await fetcher(API_URL, 'DELETE', headers, data);
	} catch (error) {
		console.log(error);
		return error;
	}
};