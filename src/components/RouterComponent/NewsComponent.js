import React, {Component} from 'react';

import { Link } from "react-router-dom";

class NewsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[
            {id:1,title:'新闻1111'},
            {id:2,title:'新闻2222'},
            {id:3,title:'新闻3333'},
            {id:4,title:'新闻4444'},
        ]  };
    }
    render() {
        return (
            <div>
                <h2>新闻列表</h2>
                {this.state.list.map((value, key)=>{
                    return (
                        <p key={key}>
                            <Link to={`/news/${value.id}`}>{value.title}</Link>
                        </p>
                    )
                })}
            </div>
            
        );
    }
}

export default NewsComponent;