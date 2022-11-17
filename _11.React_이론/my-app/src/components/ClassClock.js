import React, { Component } from 'react';

class Clock extends Component {
	// 초기화 담당, 해당 컴포넌트에서 사용할 state의 정의를 내림
	constructor(props){
		super(props);
		this.state = { date: new Date() };
	}
	// class에 해당하는 메소드로 setState()를 실행하며 date를 업데이트 해주는 역할
	tick(){
		this.setState({
			date: new Date()
		});
	}
	// 1초에 한번씩 setInterval로 tick()을 실행
	componentDidMount(){
		console.log('componentDidMount');
		this.timerID = setInterval(() => this.tick(), 1000);
	}
	componentDidUpdate(){
		console.log('componentDidUpdate');
		console.log(this.state.date);
	}
	componentWillUnmount(){
		console.log('componentWillUnmount');
		clearInterval(this.timerID);
	}
	render() {
		return (
			<div>
				<h1>Hello, world!</h1>
				<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
			</div>
		);
	}
}

export default Clock;