import React, { useState } from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

export default function Calculator() {
	const [state, setState] = useState({
		scale : 'c',
		temperature : 0
	});

	const handleTemperatureChange = (obj) => {
		// 섭씨ㆍ화씨 중 어떤 값이 수정된건지, 값(온도)는 몇 인지
		// obj.scale, obj.temperature
		setState({...state, scale : obj.scale, temperature : obj.temperature})
	}
	const {scale, temperature} = state
	const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
	const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

	function toCelsius(fahrenheit){
		// 섭씨 변환식
		return( (fahrenheit - 32) * 5 ) / 9;
	}
	function toFahrenheit(celsius) {
		// 화씨 변환식
		return (celsius * 9 / 5) + 32;
	}
	function tryConvert(temperature, convert) {
		// 변환된 온도를 적용시키는 함수
		const input = parseFloat(temperature);
		if (Number.isNaN(input)) {
			return '';
		}
		const output = convert(input);
		const rounded = Math.round(output * 1000) / 1000;
		return rounded.toString();
	}

	return (
		<>
			<TemperatureInput scale={"c"} temperature={celsius} onTemperatureChange={handleTemperatureChange}/>
			<TemperatureInput scale={"f"} temperature={fahrenheit} onTemperatureChange={handleTemperatureChange}/>
		</>
	);
}