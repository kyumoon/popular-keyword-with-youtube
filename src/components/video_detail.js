import React from 'react';
import { connect } from 'react-redux'

class VideoDetail extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const item = this.props.item;
        const title = item ? item.snippet.title : "empty";
        const url = item ? item.snippet.thumbnails.default.url : "../logo.svg";
        const videoId = item ? item.id.videoId : ''
        return (
            <div>
                <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+videoId} 
                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                </iframe>
                <div id="player">title : {title}</div>
            </div>
        )
    }
}



const mapStateToProps = ({ YoutubeReducer }) => {
    if (!YoutubeReducer) {
        return {
            item: 'empty'
        }
    }
    return {
        item: YoutubeReducer.item
    }
}

export default connect(mapStateToProps)(VideoDetail)