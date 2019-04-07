import Axios from "axios";

const GET_KEYWORD_LIST = 'GET_KEYWORD_LIST';

export function getKeywordList() {
    return dispatch => {
        Axios.get('http://rank.search.naver.com/rank.js').then(
            (response) => {
                dispatch(receiveData(response.data.data[0].data));
            }
        ).catch((err) => {
            console.log('keyword reducer:', err);
        }
        )
    }
}


function receiveData(data) {
    return {
        type: GET_KEYWORD_LIST,
        payload: data
    }
}

const initialState = {

    keywordList: []
}

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case GET_KEYWORD_LIST:
            console.log('GET_KEYWORD_LIST called', action.payload);
            return {
                keywordList: action.payload
            }
        default:
            return state;
    }
}