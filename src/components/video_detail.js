import React from 'react';
import { connect } from 'react-redux'

class VideoDetail extends React.Component {

    ref = React.createRef();

    render() {
        const item = this.props.item;
        this.title = item ? item.snippet.title : "empty";
        const videoId = item ? item.id.videoId : ''
        return (
            <div className="video-detail">
                {videoId?
                    <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+videoId} 
                    frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                    </iframe>
                    :<div>...loading</div>
                }
                <div className="title" ref={this.ref} style={{'WebkitBoxOrient': 'vertical'}}></div>
            </div>
        )
    }

    componentDidUpdate(){
        console.log('title:',this.title);
        if(this.ref.current){
            this.ref.current.innerHTML=this.title;
        }
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