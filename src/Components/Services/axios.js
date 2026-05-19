import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.freeapi.app/api/v1",
});

export default instance;