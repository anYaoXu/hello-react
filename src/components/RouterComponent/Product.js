import React, {Component} from 'react';
import { Link } from "react-router-dom";
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
    render() {
        return (
            <div>
            <h2>产品组件</h2>  
            {this.state.list.map((value, key)=>{
                return (
                    <p key={key}>
                        <Link to={`/procuctDetail?id=${value.id}`}>{value.title}</Link>
                    </p>
                )
            })}  
            </div>        
        );
    }
}

export default Product;