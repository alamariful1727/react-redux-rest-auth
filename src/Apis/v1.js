import axios from "axios";

export default axios.create({
	baseURL: "https://e8ebf024.ngrok.io/api/v1/"
	// baseURL: "http://192.168.8.171:4040/api/v1/"
});
