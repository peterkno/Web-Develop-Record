const fs = require('fs');
const uuid = require('uuid/v4');

function list(searchText = '') {
    return new Promise((resolve, reject) => {
        if(!fs.existsSync('data-heritages.json')) {
            fs.writeFileSync('data-heritages.json', '');
        }

        fs.readFile('data-heritages.json', 'utf8', (err,data) => {
            if (err) reject(err);

            let heritages = data ? JSON.parse(data) : [];
            
            if(heritages.length > 0 && searchText) {
                heritages = heritages.filter(h => {
                    return h.personalID.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
                });
            }
            console.log("Model: " + heritages);
            resolve(heritages);
        })
    })
}

function create(personalID, heritage) {
    return new Promise((resolve, reject) => {
        const newHeritage = {
            personalID : String(personalID),
            heritage : Number(heritage)
        };

        list().then(heritages => {
            heritages = [
                newHeritage,
                ...heritages
            ];
            fs.writeFile('data-heritages.json', JSON.stringify(heritages), err => {
                if (err) reject(err);

                resolve(newHeritage);
            })
        })
    })
}

module.exports = {
    list,
    create
};