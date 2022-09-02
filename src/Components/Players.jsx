/* eslint-disable jsx-a11y/anchor-is-valid */

import { connect } from 'react-redux';

import '../CSS/Players.css';
const Players = (props) => {
	let playerData = [];
	console.log(props.playerData);
	if (props.playerData) {
		playerData = props.playerData.map((player, i) => {
			if (i === props.activePlayer) {
				return (
					<a className="item">
						<b>{player.name}</b>
					</a>
				);
			}
			if (player.eliminated) {
				return (
					<a className="item" style={{ textDecoration: 'line-through' }}>
						{player.name}
					</a>
				);
			} else {
				return <a className="item">{player.name}</a>;
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
