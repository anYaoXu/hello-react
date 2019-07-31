import React, {Component} from 'react';

import { Route,Link } from "react-router-dom";
import NewDetail from './NewDetail';
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
    componentDidMount(){
        console.log(this.props);
    }
    render() {
        return (
            <div>
                <h2>新闻列表</h2>
                {this.state.list.map((value, key)=>{
                    return (
                        <p key={key}>
                            <Link to={`/newlist/${value.id}`}>{value.title}</Link>
                        </p>
                    )
                })}
                {
                    this.props.routes.map((route,key)=>{
                        return <Route key={key} exact path={route.path} 
                        component={route.component} />
                    })
                }
            </div>
            
        );
    }
}

export default NewsComponent;