import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";


class News extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentWillMount(){
        console.log(this.props.routes);
    }
    render() {
        return (
            <div>
                <h2>新闻分类组件</h2>
                <div className="user">
                    <div className="content">
                        <div className="left">
                            <Link to="/news/">时政要闻</Link><br /><br />
                            <Link to="/news/newsTwo">娱乐新闻</Link>
                        </div>
                        <div className="right">
                           {
                                this.props.routes.map((route,key)=>{
                                     return   <Route key={key} exact path={route.path} component={route.component} />
                                })
                            }
                        </div>
                    </div> 
                </div>
            </div>
        );
    }
}

export default News;