import axios from 'axios';

const API_KEY = '0dd373fe1df64302e10e674aee3bb436';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';
        
export function fetchWeather(city) {
    const countryCode = 'us'; // static...
    const url = `${ROOT_URL}&q=${city},${countryCode}`;
    const request = axios.get(url);
    console.log('Request: ',request);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
