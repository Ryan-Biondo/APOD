import axios from "axios";

export const API_KEY = "vGWHa3llbktn0ix8JEVANfGezWD4i3FtZBc6illA";

export default axios.create({
    baseURL: "https://api.nasa.gov/planetary/",
    params: {
        api_key: API_KEY
    }
});
