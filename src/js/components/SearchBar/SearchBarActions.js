import axios from 'axios';

export function SearchCity(name) {
    return {
        type:'CITY_NAME',
        payload: { name }
    };
}

export function getWeather(name) {
    return {
        type:'GET_WEATHER',
        payload: axios.get(`/search/${name}`)
    };
    
}