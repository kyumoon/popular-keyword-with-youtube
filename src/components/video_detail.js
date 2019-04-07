import React from 'react';
import {connect} from 'react-redux'

function VideoDetail({item}){
    const title=item?item.snippet.title:"empty";
    const url=item?item.snippet.thumbnails.default.url:"../logo.svg";
    return <div><img src={url}/>title : {title}</div>
}

const mapStateToProps=({YoutubeReducer})=>{
    if(!YoutubeReducer){
        return {
            item: 'empty'
        }
    }
    return {
        item:YoutubeReducer.item
    }
}

export default connect(mapStateToProps)(VideoDetail)