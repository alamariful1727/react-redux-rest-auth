import axios from "axios";

export default axios.create({
	baseURL: "https://dea26c1b.ngrok.io/api/v1/"
	// baseURL: "http://192.168.8.171:4040/api/v1/"
});

export const nizamBhai = axios.create({
	baseURL: "https://cf1f91b2.ngrok.io/api/v1/"
});
