import menu from '../data/menu';

export default (
	state = menu,
	action
) => {
	switch (action.type) {
		case 'MENU_TOGGLE': {
			return {
				...state,
				menuActive: !state.menuActive,
				menuCurrentElement: action.payload.el,
			};
		}
	}

	return state;
};
