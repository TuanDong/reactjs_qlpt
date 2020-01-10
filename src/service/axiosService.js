import axios from 'axios';//https://github.com/axios/axios
import {Bear_Token} from './../constants';

class AxiosService {

    constructor() {
        const instance = axios.create({
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "bearer " + Bear_Token.token
            }
        });
        instance.interceptors.request.use(this.handleSuccess,this.handleError);
        this.instance = instance;
        
    }
    handleSuccess(response) {
        return response;
    }
    handleError(error){
        return Promise.reject(error);
    }
    get(url) {
        return this.instance.get(url);
    }
    post(url,data=null) {
        return this.instance.post(url,data);
    }
    put(url,data=null) {
        return this.instance.put(url,data);
    }
}

export default new AxiosService();