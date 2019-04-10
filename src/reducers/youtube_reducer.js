import Axios from 'axios';
import tempList from '../mock_data'
import {setKeyword} from './keyword_reducer'

const RECEIVE_VIDEO_LIST = 'RECEIVE_VIDEO_LIST';
const GET_VIDEO_LIST = 'GET_VIDEO_LIST';
const CHOICE_VIDEO = 'CHOICE_VIDEO';

const receiveList = (list) => {
    return dispatch=>{
        //리스트조회 후 첫번째항목 자동으로 상단에 출력
        dispatch(choiceVideo(list[0]));
        dispatch(returnList(list));
        
    }
}

const returnList = (list)=>{
    return {
        type: RECEIVE_VIDEO_LIST,
        isFetching: false,
        payload:list
    }
}

export const getList = (keyword = "볼링") => {
    return dispatch => {
        const key = "AIzaSyB2-nh1YNO5HP01iR8Z0m4hkh01l0ST1LY"
        // const key = "invalid key"
        const type= "video";
        const limit= "18";
        const url = `https://www.googleapis.com/youtube/v3/search?q=${keyword}&type=${type}&part=snippet&maxResults=${limit}&key=${key}`;
        dispatch(setKeyword(keyword));
        Axios.get(url).then((response) => {
            const items =response.data.items;
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
        payload:item
    }
}

const initialState={
    list:[],
    choiceVideoId: 'EMPTY'
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case RECEIVE_VIDEO_LIST:
            return {
                ...state,
                list: action.payload
            }
        case GET_VIDEO_LIST:
            return {
                ...state
            }
        case CHOICE_VIDEO:
            console.log('choice item',action);
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
}