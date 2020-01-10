import axiosService from './../service/axiosService';
import { API_ENDPOINT } from './../constants';

export const fetchListRoom = () => {
    return axiosService.get(`${API_ENDPOINT}/room`);
}

export const getPrice = () => {
    return axiosService.get(API_ENDPOINT+'/room/price');
}