import React from 'react';

export const Button = (props) => {
	console.log('props: ', props);
	const btnText = props.btnInfo.text;
	const btnInfo = props.btnInfo;
	const screenInfo = props.screenInfo;
	let btnClass;
	let btnSpanClass;

	switch (props.btnInfo.value) {
		case 'Go':
			btnClass = 'timer__btn timer__btn_go-btn-container';
			btnSpanClass = 'timer__text timer__go-btn';
			break;
		default:
			btnClass = "timer__btn";
			btnSpanClass = props.btnInfo.icon ? "timer__btn-text timer__text" : "timer__btn-text timer__text timer__btn-text_no-icon";
	}


	// console.log("props.screenInfo: ", props.screenInfo);
	// console.log("button props: ", props.btnInfo);

	return (
		<button className={btnClass} onClick={(e) => props.handleClick(screenInfo, e)} >
			{props.btnInfo.icon &&
				<picture className="timer__btn-picture">
					<img src={require(`../../assets/${btnInfo.icon}`)} className="timer__btn-icon" alt="" />
				</picture>}

			<span className={btnSpanClass} data-value={`${btnText}`}>{btnText}</span>
		</button>
	)
}