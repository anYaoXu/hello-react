import React, {Component} from 'react';
class NewDetail extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         };
    }
    componentDidMount(){
        console.log(this.props.match.params);
    }
    componentDidUpdate(){
        console.log('更新',this.props.match.params);
    }
    render() {
        return (
            <div>
                新闻详情组件--{this.props.match.params.id}
            </div>
        );
    }
}

export default NewDetail;