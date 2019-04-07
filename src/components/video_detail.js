import React from 'react';
import {connect} from 'react-redux'

function VideoDetail({choiceVideoId}){
    return <div>choicedVideId : {choiceVideoId}</div>
}

const mapStateToProps=({YoutubeReducer})=>{
    if(!YoutubeReducer){
        return {
            choiceVideoId: 'empty'
        }
    }
    return {
        choiceVideoId:YoutubeReducer.choiceVideoId
    }
}

export default connect(mapStateToProps)(VideoDetail)