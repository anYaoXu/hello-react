import React, {Component} from 'react';
const scaleName ={
    c:'Celsius',
    f:'Fahrenheit'
}

class TemperatureInput extends Component{

    constructor(props){
        super(props);
        this.state = {
            temperature:0
        }
    }
    handleChange(event){
        this.props.onTemperatureChange(event.target.value);
        // console.log(event.target.value);
        // this.setState((state)=>({
        //     temperature: state.temperature+22
        // }))
        
        this.setState({
            temperature: event.target.value
        })
    }

    render() {
        const scale = this.props.scale;
        const temperature = this.props.temperature
        return(
            <fieldset>

            
            <legend>
                    Enter temperature in {scaleName[scale]}
            </legend>
            <input type="text" value={temperature} onChange={(event) => this.handleChange(event)}/>
            </fieldset>
        )
    }
}
export default TemperatureInput;