import { create } from 'apisauce';

const apiClient = create({
	baseURL: 'https://berlin-events-app-server-73v23.ondigitalocean.app/api',
});

export default apiClient;
