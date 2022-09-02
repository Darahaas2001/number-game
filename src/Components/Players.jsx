/* eslint-disable jsx-a11y/anchor-is-valid */

import { connect } from 'react-redux';

import '../CSS/Players.css';
const Players = (props) => {
	let playerData = [];
	console.log(props.playerData);
	if (props.playerData) {
		playerData = props.playerData.map((player, i) => {
			if (player.eliminated) {
				return (
					<div class="ui medium header">
						<a className="item" style={{ textDecoration: 'line-through' }}>
							<span className={player.color}>{player.name}</span>
						</a>
					</div>
				);
			} else if (i === props.activePlayer) {
				return (
					<div class="ui medium header">
						<a className="item">
							<span
								className={player.color}
								style={{ textDecoration: 'underline' }}
							>
								<b>{player.name}</b>
							</span>
						</a>
					</div>
				);
			} else {
				return (
					<div class="ui medium header">
						<a className="item">
							<span className={player.color}>{player.name}</span>
						</a>
					</div>
				);
			}
		});
	}

	return (
		<div className="ui vertical text menu">
			<div class="ui large header">Your num : {props.userNumber || ''}</div>
			<br />
			<div className="ui large header">Players Online :</div>
			{playerData}
		</div>
	);
};
const mapStateToProps = (state) => {
	return {
		playerData: state.playerData,
		activePlayer: state.activePlayer,
		userNumber: state.userNumber,
	};
};
export default connect(mapStateToProps)(Players);
