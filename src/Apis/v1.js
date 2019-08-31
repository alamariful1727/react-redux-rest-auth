import axios from "axios";

export default axios.create({
	baseURL: "http://192.168.8.171:4040/api/v1/"
});
