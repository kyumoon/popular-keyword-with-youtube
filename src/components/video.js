import React from 'react';
import { connect } from 'react-redux';
import { choiceVideo } from '../reducers/youtube_reducer'

export class Video extends React.Component{
    render(){
        console.log('video',this.props.item);
        return <li onClick={()=>{this.choiceVideo(this.props.item)}}>{this.props.item.snippet.title}</li>
    }

    choiceVideo = (item)=>{
        this.props.choiceVideo(item);
    }
}

const mapDispatchToProps = dispatch => ({
    choiceVideo: (item) => dispatch(choiceVideo(item))
  })

export default connect(null,mapDispatchToProps)(Video)