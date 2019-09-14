import axios from 'axios';

const apiBaseUrl = 'http://localhost:9487/api';

export function listPerson(searchText = '') {
    let url = `${apiBaseUrl}/persons`;
    if (searchText) {
        url += `?searchText=${searchText}`;
    }
    // console.log(`Making GET request to: ${url}`);

    return axios.get(url).then(function(res) {
        if(res.status !== 200){
            throw new Error(`Unexpected response code: ${res.status}`);
        }
        // console.warn("Res Data", res.data);
        return res.data;
    });
}

export function createPerson(newPerson) {
    let url = `${apiBaseUrl}/persons`;

    // console.log(`Making POST request to: ${url}`);

    return axios.post(url, {
        newPerson
    }).then(function(res) {
        if(res.status !== 200) {
            throw new Error(`Unexpected response code: ${res.status}`);
        }
        
        return res.data;
    })
}