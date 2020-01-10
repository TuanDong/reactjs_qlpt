import axiosService from './../service/axiosService';
import { API_ENDPOINT } from './../constants';

export const loginAPI = (data) => {
    return axiosService.post(`${API_ENDPOINT}/login`,data);
}

// fetch('http://127.0.0.1:8000/api/login',{
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//               },
//             body:JSON.stringify({
//                 "name":"admin",
//                 "password":"admin"
//             })
//         }).then(response => response.json())
//         .then(result => console.log(result))
//         .catch(error => {
//             console.log(error);
//         });
        
        // loginAPI({
        //     "name":"admin",
        //     "password":"admin"
        // }).then(data =>{
        //     Bear_Token.token = data.json().data.access_token;
        // }).catch(error => {
        //     console.log(error);
        // });
        // this.props.load_data();
        // fetchListRoom().then(data => {
        //     console.log(data);
        // }).catch(error => {
        //     console.log(error);
        // });