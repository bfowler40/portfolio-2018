const data = {
	menuActive: true,
	menuItems: [
		'work',
		'skills',
		'about',
	],
};

export default (
	state = data,
	action
) => {
	switch (action.type) {
		case 'MENU_TOGGLE': {
			return { ...state, menuActive: !state.menuActive };
		}
	}

	return state;
};
