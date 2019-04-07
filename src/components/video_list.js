import React, { Component } from 'react'
// import axios from 'axios';
// import YoutubeSearch from 'youtube-search'
import { connect } from 'react-redux'
import { getList } from '../reducers/youtube_reducer'
import Video from './video'

class VideoList extends Component{

    render() {
        console.log('video list rendered')
        let a= 1;
        return <ul>
            {this.props.list 
            ?this.props.list.map((item)=>{
                console.log(item);
                return <Video key={item.id.videoId} item={item}/>
            })
            :<div>loding....</div>
        }
        </ul>
    }

    componentDidMount() {
        console.log('video list mounted')
        this.props.getList();
    };

}
const mapStateToProps = ({YoutubeReducer})=>{
    if(YoutubeReducer){
        return {list:YoutubeReducer.list}
    }else{
        return {list:[]}
    }
}

const mapDispatchToProps = dispatch => ({
    getList: () => dispatch(getList())
  })

export default connect(mapStateToProps,mapDispatchToProps)(VideoList);

