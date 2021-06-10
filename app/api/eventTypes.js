import apiClient from './client';

const endpoint = '/eventtypes';
const getEventTypes = () => apiClient.get(endpoint);

export default {
	getEventTypes,
};
