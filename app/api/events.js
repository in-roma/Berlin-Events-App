import apiClient from './client';

const endpoint = '/events';
const getEvents = () => apiClient.get(endpoint);

export default {
	getEvents,
};
