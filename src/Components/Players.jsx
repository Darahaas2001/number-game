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
					<a className="item" style={{ textDecoration: 'line-through' }}>
						<span className={player.color}>{player.name}</span>
					</a>
				);
			} else if (i === props.activePlayer) {
				return (
					<a className="item">
						<span className={player.color}>
							<b>{player.name}</b>
						</span>
					</a>
				);
			} else {
				return (
					<a className="item">
						<span className={player.color}>{player.name}</span>
					</a>
				);
			}
		});
	}

	return (
		<div className="ui vertical text menu">
			<div className="header item">Players Online</div>
			{playerData}
		</div>
	);
};
const mapStateToProps = (state) => {
	return { playerData: state.playerData, activePlayer: state.activePlayer };
};
export default connect(mapStateToProps)(Players);
