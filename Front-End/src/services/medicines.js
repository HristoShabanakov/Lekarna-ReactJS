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


export const getDetails = async (token, id) => {
	const headers = getHeaders(token);

	try {
		const response = await fetcher(API_URL + `/${id}` , 'GET', headers);
	
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

export const editMedicine = async (data, token) => {
	const headers = getHeaders(token);
	const response = await fetcher(API_URL + `/${data.id}`,'PUT', headers, data);
	
	return response.status===200
};

export const deleteMedicine = async (token, id) => {
	const headers = getHeaders(token);
	const response = await fetcher(API_URL + `/${id}`,'DELETE', headers);
	
	return response.status===200
};