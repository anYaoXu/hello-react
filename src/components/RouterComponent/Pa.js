import React, {Component} from 'react';

class PA extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         };
    }
    componentDidMount(){
        console.log(this.props.match.params);
    }
    render() {
        return (
            <div>
                新闻详情组件1
            </div>
        );
    }
}

export default PA;