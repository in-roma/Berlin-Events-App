import apiClient from './client';

const endpoint = '/eventdates';
const getEventDates = () => apiClient.get(endpoint);

export default {
	getEventDates,
};
