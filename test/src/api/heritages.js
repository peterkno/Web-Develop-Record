import axios from 'axios';

const heritageBaseUrl = 'http://localhost:9487/api';

export function listHeritage(searchText = '') {
    let url = `${heritageBaseUrl}/heritages`;
    if (searchText) {
        url += `?searchText=${searchText}`;
    }
    console.log(`Making GET request to: ${url}`);

    return axios.get(url).then(function(res) {
        if(res.status !== 200){
            throw new Error(`Unexpected response code: ${res.status}`);
        }
        console.warn("Res Data", res.data);
        return res.data;
    });
}

export function createHeritage(personalID, heritage) {
    let url = `${heritageBaseUrl}/heritages`;

    console.log(`Making POST request to: ${url}`);

    return axios.post(url, {
        personalID,
        heritage
    }).then(function(res) {
        if(res.status !== 200) {
            throw new Error(`Unexpected response code: ${res.status}`);
        }
        
        return res.data;
    })
}