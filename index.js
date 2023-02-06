// import sayHi from './modules/module.js';
// import stuff from './modules/operations.js';
import getImages from './modules/unsplash.js';
const imgContainer = document.querySelector('.img-container');

async function start() {
    let isSearch = true;
    let searchInput = 'nature';
    let fetchedData = await getImages(isSearch, searchInput);
    console.log(fetchedData);
    if (isSearch) {
        // då returneras en lista på resultat
        let imgList = fetchedData.results;
        imgList.forEach((img) => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', img.urls.small);
            console.log(imgEl);
            imgContainer.appendChild(imgEl);
        });
    } else {
        //returneras ett objekt på resultat
        let img = document.createElement('img');
        img.setAttribute('src', fetchedData.urls.small);
        imgContainer.appendChild(img);
    }
}

start();