import React,{Component} from'react';

function BoilingVerdicFunc(props){
    if(props.celsius >= 100){
        return <p> ther water would boil</p>
    }
    return <p>the water would not boil</p>
}

class BoilingVerdic extends Component{
    render(){
        return(
            <BoilingVerdicFunc celsius = {parseFloat(this.props.celsius)}/>
        )
    }
}
export default BoilingVerdic;