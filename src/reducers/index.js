import YoutubeReducer from './youtube_reducer'
import KeywordReducer from './keyword_reducer'
import {combineReducers} from 'redux'



export default combineReducers({
    YoutubeReducer,
    KeywordReducer,    
})