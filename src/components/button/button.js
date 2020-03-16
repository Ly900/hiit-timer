import React from 'react';

export const Button = (props) => {
	
	const btnText = props.btnInfo.text;
	const btnInfo = props.btnInfo;
	const screenInfo = props.screenInfo;
	const btnClass = props.btnInfo.icon ? "timer__btn-text" : "timer__btn-text timer__btn-text_no-icon";
	// console.log("props.screenInfo: ", props.screenInfo);
	// console.log("button props: ", props.btnInfo);

	return (
		<button className="timer__btn" onClick={(e) => props.handleClick(screenInfo, e)} >
			{props.btnInfo.icon &&
				<picture className="timer__btn-picture">
					<img src={require(`../../assets/${btnInfo.icon}`)} className="timer__btn-icon" alt="" />
				</picture>}

			<span className={btnClass} data-value={`${btnInfo.value}`}>{btnText}</span>
		</button>
	)
}