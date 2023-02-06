let client_id = 'V2_qc3wlqzic140eJ_PsKoIoOm6TmRueFrGzdcKqbXU';
let startURL = 'https://api.unsplash.com/';
let searchEndPoint = 'search/photos';
let randomEndPoint = 'photos/random';

function getImages(search, input) {
    if (search) {
        let url = startURL + searchEndPoint + '?query=' + input + '&client_id=' + client_id;
        console.log(url);
    }
}
console.log(getImages(true, 'puppies'));