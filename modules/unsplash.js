let client_id = 'V2_qc3wlqzic140eJ_PsKoIoOm6TmRueFrGzdcKqbXU';
let startURL = 'https://api.unsplash.com/';
let searchEndPoint = 'search/photos?query=';
let randomEndPoint = 'photos/random?content_filter=high';

async function getImages(search, input) {
    let url = '';
    if (search) {
        url = startURL + searchEndPoint + input + '&client_id=' + client_id;
        console.log(url);
    } else {
        url = startURL + randomEndPoint + '&client_id=' + client_id;
        console.log(url)
    }

    //url är redo - dags att fetcha
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

export default getImages;