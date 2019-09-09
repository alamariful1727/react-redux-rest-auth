import axios from "axios";

export default axios.create({
	// baseURL: "https://98c8be9d.ngrok.io/api/v1/"
	// baseURL: "https://40650e85.ngrok.io/api/v1/"
	baseURL: "http://192.168.8.252:4040/api/v1/"
});
