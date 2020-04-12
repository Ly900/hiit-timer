import React from 'react';
import { Button } from '../button/button';

export const TimerPrompt = (props) => {

	if (props.loading) {
		return <div>Loading...</div>;
	}

	const screenToDisplay = props.bodyContentInfo.filter((item) => item.screenNum === props.currentScreen);

	const buttonsToDisplay = screenToDisplay.map((button) => {
		// console.log("button: ", button);
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
			{buttonsToDisplay}
		</div>
	)
}