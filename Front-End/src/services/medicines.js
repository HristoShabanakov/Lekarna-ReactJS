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