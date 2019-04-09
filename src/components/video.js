import React from 'react';
import { connect } from 'react-redux';
import { choiceVideo } from '../reducers/youtube_reducer'

export class Video extends React.Component {
    ref = React.createRef();
    title = 'empty';

    render() {
        const item = this.props.item;
        const title = item.snippet.title;
        this.title = title;
        const url = item.snippet.thumbnails?item.snippet.thumbnails.medium.url:'';

        console.log('video', this.props.item);
        return <li className="video" onClick={() => { this.choiceVideo(item) }}>
                    <img src={url} />
                    <div className="title" title={title} ref={this.ref} style={{'WebkitBoxOrient': 'vertical'}}></div>
                </li>
    }

    componentDidMount(){
        if(this.ref.current){
            this.ref.current.innerHTML=this.title;
        }
    }

    choiceVideo = (item) => {
        this.props.choiceVideo(item);
    }
}

const mapDispatchToProps = dispatch => ({
    choiceVideo: (item) => dispatch(choiceVideo(item))
})

export default connect(null, mapDispatchToProps)(Video)