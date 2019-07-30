import React, {Component} from "react";
import BoilingVerdic from './BoilingVerdict';

import TemperatureInput from './TemperatureInput';



class Calculator extends Component{
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {temperature: '', scale: 'c'};
      }

    scaleNames = {
        c: 'Celsius',
        f: 'Fahrenheit'
    };
    
    toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

    toFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }
    tryConvert(temperature, convert) {
        const input = parseFloat(temperature);  
        if (Number.isNaN(input)) {
          return '';
        }
        let output;
        if(convert === 'f'){
            output = this.toCelsius(input)
        }else{
            output = this.toFahrenheit(input);
        }
        // const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    }                                                                                       
    handleCelsiusChange(temperature) {
        this.setState({scale: 'c', temperature});
      }
    
      handleFahrenheitChange(temperature) {
        this.setState({scale: 'f', temperature});
      }
    render(){
        const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? this.tryConvert(temperature, 'f') : temperature;
    const fahrenheit = scale === 'c' ? this.tryConvert(temperature, 'c') : temperature;
        return (
            <fieldset>
                {/* <TemperatureInput></TemperatureInput> */}
                <TemperatureInput  scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}/>
                <TemperatureInput scale="f" temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}/>
                <BoilingVerdic celsius={this.state.temperature}/>
            </fieldset>            
        )
    }
}
export default Calculator;