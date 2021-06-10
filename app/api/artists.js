import apiClient from './client';

const endpoint = '/artists';
const getArtists = () => apiClient.get(endpoint);

export default {
	getArtists,
};
