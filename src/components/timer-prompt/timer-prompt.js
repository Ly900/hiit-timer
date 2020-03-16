import React from 'react';

//images
// import ringSimple from '../../assets/icon-ring-simple.png';
// import ringCustom from '../../assets/icon-ring-custom.png';

//components
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