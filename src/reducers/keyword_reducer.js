import Axios from "axios";
import { getList } from './youtube_reducer';

const GET_KEYWORD_LIST = 'GET_KEYWORD_LIST';
export const SET_KEYWORD = 'SET_KEYWORD';

export function getKeywordList() {
    return dispatch => {
        let keyword = null;
        Axios.get('https://rank.search.naver.com/rank.js').then(
            (response) => {
                const list = response.data.data[0].data;
                dispatch(receiveData(list));
                dispatch(getList(list[0].keyword));
            }
        ).catch((err) => {
            console.log('keyword reducer:', err);
            dispatch(getList());
        }
        )
    }
}

export function setKeyword(keyword) {
    return {
        type: SET_KEYWORD,
        payload: keyword
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
            return {
                ...state,
                keywordList: action.payload
            }
        case SET_KEYWORD:
            return {
                ...state,
                keyword: action.payload
            }
        default:
            return state;
    }
}