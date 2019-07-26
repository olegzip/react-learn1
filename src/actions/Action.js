


const GET_PHOTO_REQUEST = 'GET_PHOTO_REQUEST';
const GET_PHOTO_SUCCESS = 'GET_PHOTO_SUCCESS';

function getPhotos(year) {
    return {
        type: GET_PHOTOS,
        payload: year
    }
}