import { create } from 'apisauce';

const apiClient = create({
	baseURL: 'https://events-app-server-qdtle.ondigitalocean.app/api',
});

export default apiClient;
