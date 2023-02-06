let client_id = 'V2_qc3wlqzic140eJ_PsKoIoOm6TmRueFrGzdcKqbXU';
let startURL = 'https://api.unsplash.com/';
let searchEndPoint = 'search/photos?query=';
let randomEndPoint = 'photos/random?content_filter=high';

function getImages(search, input) {
    if (search) {
        let url = startURL + searchEndPoint + input + '&client_id=' + client_id;
        console.log(url);
    } else {
        let url = startURL + randomEndPoint + '&client_id=' + client_id;
        console.log(url)
    }
}
getImages(false);