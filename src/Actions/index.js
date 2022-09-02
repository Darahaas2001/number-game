export const selectedNum = (num) => {
	return {
		type: 'SELECTED_NUM',
		payload: num,
	};
};

export const selectColor = (color) => {
	return {
		type: 'SELECTED_COLOR',
		payload: color,
	};
};

export const userNumber = (num) => {
	return {
		type: 'USER_NUMBER',
		payload: num,
	};
};

export const playersData = (player) => {
	return {
		type: 'PLAYER_DATA',
		payload: player,
	};
};

export const activePlayer = (index) => {
	return {
		type: 'PLAYER_INDEX',
		payload: index,
	};
};

export const disableButton = (val) => {
	return {
		type: 'TOGGLE_BUTTON',
		payload: val,
	};
};
