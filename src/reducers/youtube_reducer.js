import Axios from 'axios';
import tempList from '../mock_data'

const REQUEST_VIDEO_LIST = 'REQUEST_VIDEO_LIST';
const RECEIVE_VIDEO_LIST = 'RECEIVE_VIDEO_LIST';
const GET_VIDEO_LIST = 'GET_VIDEO_LIST';
const CHOICE_VIDEO = 'CHOICE_VIDEO';

const requestList = () => {
    console.log('requestList');
    return {
        type: REQUEST_VIDEO_LIST,
        isFetching: true
    }
}

const receiveList = (list) => {
    console.log('receiveList', list);
    return {
        type: RECEIVE_VIDEO_LIST,
        isFetching: false,
        list
    }
}

export const getList = (dispatch) => {
    var opts = {
        maxResults: 10,
        key: 'AIzaSyB2-nh1YNO5HP01iR8Z0m4hkh01l0ST1LY'
    };
    return dispatch => {
        dispatch(requestList());
        const keyword = "볼링";
        // const key = "AIzaSyB2-nh1YNO5HP01iR8Z0m4hkh01l0ST1LY"
        const key = "invalid key"
        const url = `https://www.googleapis.com/youtube/v3/search?q=${keyword}&part=snippet&maxResults=10&key=${key}`;
        Axios.get(url).then((response) => {
            const items =response.data.items;
            console.log(items);
            dispatch(receiveList(items));
        }
        ).catch(
            (err) => {
                console.log(err);
                dispatch(receiveList(tempList.items)); // api call제한때문에 임시 데이터 사용
                return
            }
        )
    }
}
export const choiceVideo = (item) => {
    return {
        type:CHOICE_VIDEO,
        payload:item.id.videoId
    }
}

const initialState={
    list:[],
    choiceVideoId: '-999'
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_VIDEO_LIST:
            return {
                ...state
            }
        case RECEIVE_VIDEO_LIST:
            return {
                ...state,
                list: action.list
            }
        case GET_VIDEO_LIST:
            return {
                ...state
            }
        case CHOICE_VIDEO:
            console.log('choice item',action);
            return {
                ...state,
                choiceVideoId: action.payload
            }
        default:
            return state;
    }
}