import React, {Component} from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { getList } from '../reducers/youtube_reducer';
import { setKeyword } from '../reducers/keyword_reducer';

class SearchBar extends Component{
    render(){
        return <div className="searchbar"><input type="text" maxLength="100" placeholder="입력" value={this.props.keyword} onChange={this.onChange}/></div>
    }
    
    onChange=(e)=>{
        this.delayCall();
        this.props.setKeyword(e.target.value);
    }
    
    delayCall = _.debounce(()=>{
        // alert(this.state.keyword);
        this.props.getList(this.props.keyword);
    }, 1000);

}

const mapStateToProps = ({KeywordReducer})=>{
    if(KeywordReducer){
        return {keyword:KeywordReducer.keyword}
    }else{
        return {keyword:''}
    }
}

const mapDispatchToProps = dispatch => ({
    setKeyword:(keyword)=>{ dispatch(setKeyword(keyword))},
    getList:(keyword)=>{ dispatch(getList(keyword))}
})



export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);


