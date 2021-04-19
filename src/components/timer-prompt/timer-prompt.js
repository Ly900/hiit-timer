import React from 'react';
import { Button } from '../button/button';

export const TimerPrompt = (props) => {

	if (props.loading) {
		return <div>Loading...</div>;
	}

	const screenToDisplay = props.bodyContentInfo.filter((item) => item.screenNum === props.currentScreen);
	const timeOn = props.timeOn;
	const timeOff = props.timeOff;
	const numOfSets = props.numOfSets;
	let getSetScreen = null;

	// If it is the "Get Set" screen.
	if (props.currentScreen === 4) {
		getSetScreen =
			<div>
				<div className="timer__get-set-item">
					<span className="timer__text timer__get-set-property">Sets</span>
					<span className="timer__text timer__get-set-value">{numOfSets}</span>
				</div>
				<div className="timer__get-set-item">
					<span className="timer__text timer__get-set-property">Exercise<br /> Time</span>
					<span className="timer__text timer__get-set-value">{timeOn}</span>
				</div>
				<div className="timer__get-set-item">
					<span className="timer__text timer__get-set-property">Rest<br /> Time</span>
					<span className="timer__text timer__get-set-value">{timeOff}</span>
				</div>
				{/* <div className="timer__get-set-item">
					<button className="timer__text timer__go-btn">Go!</button>
				</div> */}
			</div>
	}

	// If buttons are coming from data in the JSON..
	let displayButtons = screenToDisplay.map((button) => {
		return button.buttonInfo.map((btn, index) => {
			return (
				<Button
					key={index}
					btnInfo={btn}
					screenInfo={button}
					bodyContentInfo={props.bodyContentInfo}
					handleClick={props.handleClick} />
			)
		})
	})

	return (
		<div className={`timer__body timer__body_screen_${props.currentScreen}`}>
			{getSetScreen}
			{displayButtons}
		</div>
	)
}