import React from 'react';
import './App.css';

//components
import { Header } from './components/header/header';
import { TimerPrompt } from './components/timer-prompt/timer-prompt';


class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			bodyContentInfo: [],
			screenNum: 0,
			timerType: null
		}
	}

	nextScreen = () => {
		// console.log("state screen number", this.state.screenNum);
		this.setState({
			screenNum: this.state.screenNum + 1
		}, () => {
			// console.log("state screen number", this.state.screenNum);
		}
		);
	}

	handleClick = (btnInfo, e) => {
		console.log("btnInfo: ", btnInfo);
		console.log("e data-value: ", e.target.getAttribute("data-value"));
		const statePropToChange = btnInfo.statePropToChange;
		const val = e.target.getAttribute("data-value");
		this.setState(
			{
				[statePropToChange]: val
			}, () => {
				console.log("this.state: ", this.state);
				this.nextScreen();
			})

	}

	componentDidMount() {
		fetch("./body-content-info.json")
			.then(response => response.json())
			.then(data =>
				this.setState(
					{
						loading: false,
						bodyContentInfo: data
					}, () => {
						// console.log("bodyContentInfo: ", this.state.bodyContentInfo);
					})
			)
	}

	render() {
		return (
			<div className={`timer__container timer__container_screen_${this.state.screenNum}`}>
				<Header currentScreen={this.state.screenNum} />
				<TimerPrompt
					nextScreen={this.nextScreen}
					loading={this.state.loading}
					currentScreen={this.state.screenNum}
					bodyContentInfo={this.state.bodyContentInfo}
					handleClick={this.handleClick} />
			</div>
		)
	}
}

export default Timer;
