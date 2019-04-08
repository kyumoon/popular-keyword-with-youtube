import React from 'react';
import { connect } from 'react-redux';
import { choiceVideo } from '../reducers/youtube_reducer'

export class Video extends React.Component {
    render() {
        const item = this.props.item;
        const title = item.snippet.title;
        const url = item.snippet.thumbnails.medium.url;
        console.log('video', this.props.item);
        return <li className="video" onClick={() => { this.choiceVideo(item) }}>
                    <img src={url} />
                    <div className="title" title={title}  style={{'WebkitBoxOrient': 'vertical'}}>{title}</div>
                </li>
    }

    choiceVideo = (item) => {
        this.props.choiceVideo(item);
    }
}

const mapDispatchToProps = dispatch => ({
    choiceVideo: (item) => dispatch(choiceVideo(item))
})

export default connect(null, mapDispatchToProps)(Video)