import axios from "axios";

const httpAxios=axios.create({
    baseURL: 'http://localhost/backend/public/api/',
    timeout: 6000,
    Headers:{'X-Custom-Header':'foobar'}
    
});
export default httpAxios;