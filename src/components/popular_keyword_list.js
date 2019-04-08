import React, {Component} from 'react';
import {connect} from 'react-redux'
import {getKeywordList} from '../reducers/keyword_reducer'
import {getList} from '../reducers/youtube_reducer'

class PopularKeywordList extends Component{

    render(){
        console.log('1234',this.props.keywordList)
        let keywordList =  <li>...loding</li>;
        if(this.props.keywordList.length>0){
            keywordList = this.props.keywordList.map((item)=>{
                return <li className="key" key={item.rank} onClick={()=>{this.props.getList(item)}}>{item.keyword}</li>
            })
        }
        return <ul className="key-list">{keywordList}</ul>
    }

    componentDidMount(){
        this.props.getKeywordList();
    }
}

const mapStateToProps = ({KeywordReducer}) =>({
       keywordList: KeywordReducer.keywordList,
    })
    
    const mapDispatchToProps = dispatch => ({
        getKeywordList: () => dispatch(getKeywordList()),
        getList: (item) => dispatch(getList(item.keyword))
  })

export default connect(mapStateToProps,mapDispatchToProps)(PopularKeywordList);