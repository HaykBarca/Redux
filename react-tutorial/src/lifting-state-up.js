import ReactDOM from 'react-dom';
import React from 'react';

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

const scaleNames = {
    c: 'Celsius',
    f: 'Farenheit',
};

class TempratureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTempratureChange(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;

        return (
            <fieldset>
                <legend>Enter Temprature in {scaleNames[scale]}:</legend>
                <input value={temperature} onChange={this.handleChange} />
            </fieldset>
        );
    }
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
  
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this) ;
        this.handleFarenheitChange = this.handleFarenheitChange.bind(this) ;
        this.state = {
            temperature: '',
            scale: 'c',
        };
    }

    handleCelsiusChange(temperature) {
        this.setState({ temperature, scale: 'c' });
    }

    handleFarenheitChange(temperature) {
        this.setState({ temperature, scale: 'f' });
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;


        return (
            <div>
                <TempratureInput
                    scale="c"
                    onTempratureChange={this.handleCelsiusChange}
                    temperature={celsius} />
                <TempratureInput
                    scale="f"
                    onTempratureChange={this.handleFarenheitChange}
                    temperature={fahrenheit} />
                <BoilingVerdict celsius={parseFloat(celsius)} />
            </div>
        );
    }
}

ReactDOM.render(<Calculator />, document.getElementById('root'));
