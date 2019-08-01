import React, {Component} from 'react';
import url from 'url';

class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id:-1
         };
        
    }
    componentDidMount(){
        console.log('组件挂载完成',this.props.location.search);
        // get 传值获取
        // console.log(this.props.location.search);
        // console.log(url.parse(this.props.location.search,true).query);
        // const id = url.parse(this.props.location.search,true).query.id;
        // this.setState({
        //     id:id
        // })
    }

    componentDidUpdate(){
        const id = url.parse(this.props.location.search,true).query.id;
        this.showId(id)
    }
    showId(id){
        console.log(id);
    }
    render() {        
        return (
            <div>产品详情</div>
        );
    }
}

export default ProductDetail;