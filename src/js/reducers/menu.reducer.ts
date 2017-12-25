export default (
	state = {
		menuActive: true,
	},
	action
) => {
	switch (action.type) {
		case 'MENU_TOGGLE': {
			return { ...state, menuActive: !state.menuActive };
		}
	}

	return state;
};
