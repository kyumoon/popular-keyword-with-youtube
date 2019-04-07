import React, {Component} from 'react';
import {connect} from 'react-redux'
import {getKeywordList} from '../reducers/keyword_reducer'

class PopularKeywordList extends Component{

    constructor(props){
        super(props);
    }
    
    render(){
        console.log('1234',this.props.keywordList)
        let keywordList =  <li>...loding</li>;
        if(this.props.keywordList.length>0){
            keywordList = this.props.keywordList.map((item)=>{
                return <li>{item.keyword}</li>
            })
        }
        return <ul>{keywordList}</ul>
    }

    componentDidMount(){
        this.props.getKeywordList();
    }
}

const mapStateToProps = ({KeywordReducer}) =>({
       keywordList: KeywordReducer.keywordList
})

const mapDispatchToProps = dispatch => ({
    getKeywordList: () => dispatch(getKeywordList())
  })

export default connect(mapStateToProps,mapDispatchToProps)(PopularKeywordList);