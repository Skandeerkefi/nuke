import axios from "axios";

const api = axios.create({
	// baseURL: "https://misterteedata.onrender.com",
	baseURL: "https://nukedata-production.up.railway.app",
	// Your backend URL
});

export default api;
