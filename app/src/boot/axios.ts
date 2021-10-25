import Axios from "axios";

const axios = Axios.create({
    baseURL: `${window.location.protocol}//${window.location.hostname}:3000`
})

export default axios
