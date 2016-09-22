import axios from 'axios';
import * as types from './action-types';

const API_KEY = '0dd373fe1df64302e10e674aee3bb436';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {
    const countryCode = 'us'; // static...
    const url = `${ROOT_URL}&q=${city},${countryCode}`;
    const request = axios.get(url);
    console.log('Request: ',request);
    return {
        type: types.FETCH_WEATHER,
        payload: request
    };
}
