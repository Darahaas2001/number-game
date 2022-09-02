import { combineReducers } from 'redux';

const getSelectedNum = (state = [], action) => {
	if (action.type === 'SELECTED_NUM') {
		return [...state, action.payload];
	}
	return state;
};
const getSelectedColor = (state = '', action) => {
	if (action.type === 'SELECTED_COLOR') {
		return action.payload;
	}
	return state;
};

const userNumber = (state = 1, action) => {
	if (action.type === 'USER_NUMBER') {
		return action.payload;
	}
	return state;
};

const playerData = (state = [], action) => {
	if (action.type === 'PLAYER_DATA') {
		return action.payload;
	}
	return state;
};
const activePlayer = (state = 0, action) => {
	if (action.type === 'PLAYER_INDEX') {
		return action.payload;
	}
	return state;
};

const toggleButton = (state = 'disabled', action) => {
	if (action.type === 'TOGGLE_BUTTON') {
		return action.payload;
	}
	return state;
};

export default combineReducers({
	selectedNum: getSelectedNum,
	selectedColor: getSelectedColor,
	userNumber,
	playerData,
	activePlayer,
	toggleButton,
});
