import React, {Component} from 'react';
import { Route,Link } from "react-router-dom";

import ProductDetail from './ProductDetail';
class Product extends Component {
    constructor(props) {
        super(props);
        this.state = { list:[
            {id:1,title:'产品1111'},
            {id:2,title:'产品2222'},
            {id:3,title:'产品3333'},
            {id:4,title:'产品4444'}
        ]
        }
    }
    componentDidMount(){
        console.log(this.props);
    }
    render() {
        return (
            <div>
                <Route path="/procuctDetail" component={ProductDetail} />
                <h2>产品组件</h2>  
                {
                    this.state.list.map((value, key)=>{
                        return (
                                <p key={key}>
                                    <Link to={`/procuctDetail?id=${value.id}`}>{value.title}</Link>          

                                </p>
                                
                            
                        )
                    })
                }  
            
            {/* {
                this.props.routes.map((route,keys)=>{
                    return(
                        <Route key={keys} exact path={route.path} component={route.component}/>
                    )
                })            
            } */}
            </div>        
        );
    }
}

export default Product;