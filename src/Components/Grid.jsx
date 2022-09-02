/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { io } from 'socket.io-client';
import { connect } from 'react-redux';
import {
	selectedNum,
	playersData,
	activePlayer,
	disableButton,
} from '../Actions';
import '../CSS/Grid.css';

const socket = io('ws://number-game-ws.herokuapp.com', {
	extraHeaders: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': 'https://number-game-react.herokuapp.com/',
	},
});
socket.on('error', (data) => {
	window.alert(data);
	window.location.href = '/';
});

const Grid = (props) => {
	const query = new URLSearchParams(window.location.search);

	socket.on('oppoColor', (data) => {
		console.log(data);
		let { color, number } = JSON.parse(data);
		document
			.getElementById(number)
			.setAttribute('class', `medium ${color} circular ui button`);
	});
	socket.on('mark-black', (data) => {
		document
			.getElementById(data)
			.setAttribute('class', `medium black circular ui button`);
	});

	useEffect(() => {
		socket.on('connect', () => {
			console.log(socket.id);
		});
		socket.emit(
			'room-add',
			JSON.stringify({
				username: query.get('username'),
				room: query.get('room'),
				color: props.color,
				userNumber: props.userNumber,
			})
		);
		socket.on('updateUserData', (data) => {
			data = JSON.parse(data);
			props.playersData(data);
		});
	}, []);
	useEffect(() => {
		socket.on('updateActivePlayer', (data) => {
			props.activePlayer(parseInt(data));
		});

		socket.on('disableMouse', (data) => {
			console.log('Disabling access');
			//	data = JSON.parse(data);
			props.disableButton('disabled');

			//	document.getElementById('grid').style.pointerEvents = 'none';
			//document.querySelector('.button').disabled = true;
		});
		socket.on('enableMouse', (data) => {
			//data = JSON.parse(data);
			console.log('enabling access');
			props.disableButton('');
			//	document.getElementById('grid').style.pointerEvents = 'auto';
			//	document.querySelector('button').disabled = false;
		});
	});

	const buttonClickHandler = (e) => {
		document
			.getElementById(e.target.id)
			.setAttribute('class', `medium ${props.color} circular ui button`);
		props.selectedNum(e.target.id);
		socket.emit(
			'selectNumber',
			JSON.stringify({
				id: socket.id,
				room: query.get('room'),
				number: e.target.id,
				color: props.color,
			})
		);
	};

	let gridContent = [...Array(100)].map((_el, i) => {
		if (props.toggleButton === 'disabled') {
			return (
				<div id="grid" className="grid-item">
					<button
						id={i + 1}
						className="medium circular ui button"
						onClick={buttonClickHandler}
						disabled
					>
						{i + 1}
					</button>
				</div>
			);
		}
		return (
			<div id="grid" className="grid-item">
				<button
					id={i + 1}
					className="medium circular ui button"
					onClick={buttonClickHandler}
				>
					{i + 1}
				</button>
			</div>
		);
	});

	return (
		<div className="ui container">
			<div className="grid-container">{gridContent}</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		selected: state.selectedNum,
		color: state.selectedColor,
		userNumber: state.userNumber,
		playerData: state.playerData,
		toggleButton: state.toggleButton,
	};
};

export default connect(mapStateToProps, {
	selectedNum,
	playersData,
	activePlayer,
	disableButton,
})(Grid);
