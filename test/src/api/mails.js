import axios from 'axios';

const mailBaseUrl = 'http://localhost:9487/api';

export function findHeritage(searchText = '') {
    let url = `${mailBaseUrl}/mails`;
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

export function sendMail(searchID) {
    let url = `${mailBaseUrl}/mails`;

    // console.log(`Making POST request to: ${url}`);

    return axios.post(url, {
        searchID
    }).then(function(res) {
        if(res.status !== 200) {
            throw new Error(`Unexpected response code: ${res.status}`);
        }
        
        return res.data;
    })
}