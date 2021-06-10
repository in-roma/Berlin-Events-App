import apiClient from './client';

const endpoint = '/users';
const getUser = () => apiClient.get(endpoint);

export default {
	getUser,
};
