import React from 'react';
import './App.css';

import logo from './assets/logo.png';
import ringSimple from './assets/icon-ring-simple.png';
import ringCustom from './assets/icon-ring-custom.png';
import redHeart from './assets/icon-red-heart-green-bg.png';

const Header = (props) => {

	// console.log(props);
	// console.log("props.currentScreen: ", props.currentScreen);
	// let screenToReturn = "hey there";
	let iconToShow, titleToShow;

	switch (props.currentScreen) {
		case 0:
			iconToShow = <img className="timer__logo-img" src={logo} alt="" />;
			titleToShow = <h2 className="timer__screen-title sr-only">Home Screen</h2>;
			break;
		case 1:
			iconToShow = <img className="timer__prompt-icon" src={redHeart} alt="" />;
			titleToShow = <h2 className="timer__screen-title">Exercise Time</h2>;
			break;
		case 2:
			iconToShow = <img className="timer__prompt-icon" src={redHeart} alt="" />;
			titleToShow = <h2 className="timer__screen-title">Rest Time</h2>;
			break;
		case 3:
			iconToShow = <img className="timer__prompt-icon" src={redHeart} alt="" />;
			titleToShow = <h2 className="timer__screen-title">Number of Sets</h2>;
			break;
		default:
			iconToShow = null;
			titleToShow = "";
	}

	return (
		<header className={`timer__header`}>
			<h1 className="timer__main-heading sr-only">HIIT Timer</h1>
			<picture className="">
				{iconToShow}
			</picture>
			{titleToShow}
		</header>
	)
}

const Button = (props) => {
	const btnText = props.btnInfo.text
	// const currentScreen = props.stateProps.currentScreen
	// console.log("state props: ", props.stateProps);
	console.log("Button props: ", props);
	// console.log("current screen: ", currentScreen);

	let btnClass = props.btnInfo.icon ? "timer__btn-text" : "timer__btn-text timer__btn-text_no-icon"

	return (
		// <button className="timer__btn" onClick={() => props.stateProps.nextScreen(currentScreen)} >
		<button className="timer__btn" onClick={() => props.handleClick()} >
			{props.btnInfo.icon &&
				<picture className="timer__btn-picture">
					<img src={`${props.btnInfo.icon}`} className="timer__btn-icon" alt="" />
				</picture>}

			<span className={btnClass}>{btnText}</span>
		</button>
	)
}

const TimerPrompt = (props) => {
	// console.log(props.currentScreen);
	// let iconToShow, titleToShow;
	// console.log("TimerPrompt props: ", props);
	// console.log("current screen: ", props.currentScreen);

	const bodyContentInfo = [
		{
			screenNum: 0,
			hasIcons: true,
			buttonInfo: [
				{
					icon: ringSimple,
					text: "Simple",
					statePropToChange: "timerType",
					changeTo: "simple"
				},
				{
					icon: ringCustom,
					text: "Complex",
					statePropToChange: "timerType",
					changeTo: "complex"
				}
			]
		},
		{
			screenNum: 1,
			statePropToChange: "timeOn",
			hasIcons: false,
			buttonInfo: [
				{
					text: "0:20",
					changeTo: 20
				},
				{
					text: "0:30",
					changeTo: 30
				},
				{
					text: "0:45",
					changeTo: 45
				},
				{
					text: "1:00",
					changeTo: 60
				}
			]
		},
		{
			screenNum: 2,
			statePropToChange: "timeOff",
			hasIcons: false,
			buttonInfo: [
				{
					text: "0:10",
					changeTo: 10
				},
				{
					text: "0:30",
					changeTo: 30
				},
				{
					text: "1:00",
					changeTo: 60
				},
				{
					text: "2:00",
					changeTo: 120
				}
			]
		},
		{
			screenNum: 3,
			statePropToChange: "numOfSets",
			hasIcons: false,
			buttonInfo: [
				{
					text: "5",
					changeTo: 5
				},
				{
					text: "8",
					changeTo: 8
				},
				{
					text: "10",
					changeTo: 10
				},
				{
					text: "16",
					changeTo: 16
				}
			]
		}
	]

	let screenToDisplay = bodyContentInfo.filter((item) => item.screenNum === props.currentScreen)

	// console.log("screenToDisplay: ", screenToDisplay);

	let buttonsToDisplay = screenToDisplay.map((button) => {
		return button.buttonInfo.map((btn, index) => {
			return (
				<Button btnInfo={btn} stateProps={props} key={index} currentScreen={props.currentScreen} handleClick={props.handleClick} />
				// <Button btnInfo={btn} key={index} currentScreen={props.currentScreen} />
			)
		})
	})

	// console.log("buttonsToDisplay: ", buttonsToDisplay);

	return (
		<div className={`timer__body timer__body_screen_${props.currentScreen}`}>
			{/* <button className="timer__btn" onClick={ () => props.nextScreen(props.currentScreen) }>
				<picture className="timer__btn-picture">
					<img src="./assets/icon-ring-simple.png" className="timer__btn-icon" />
				</picture>
				<span className="timer__btn-text">Simple</span>
			</button>
			<button className="timer__btn">
				<picture className="timer__btn-picture">
					<img src="./assets/icon-ring-custom.png" className="timer__btn-icon" />
				</picture>
				<span className="timer__btn-text">Custom</span>
			</button> */}
			{/* <Button /> */}
			{buttonsToDisplay}
		</div>
	)
}

class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			screenNum: 0,
			timerType: null
		}
	}

	nextScreen = () => {
		// console.log("state screen number", this.state.screenNum);
		this.setState({
			screenNum: this.state.screenNum + 1
		}, () => {
			console.log("state screen number", this.state.screenNum);
		}
		);
	}

	handleClick = () => {
		console.log("clicked");
		this.nextScreen();
	}

	render() {
		return (
			<div className={`timer__container timer__container_screen_${this.state.screenNum}`}>
				<Header currentScreen={this.state.screenNum} />
				<TimerPrompt nextScreen={this.nextScreen} currentScreen={this.state.screenNum} handleClick={this.handleClick} />
			</div>
		)
	}
}

export default Timer;
