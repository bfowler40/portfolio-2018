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
			};
		},
		case 'MENU_ITEM_MOUSE_ENTER': {
			return {
				...state,
				menuItemHovered: true,
			};
		},
		case 'MENU_ITEM_MOUSE_LEAVE': {
			return {
				...state,
				menuItemHovered: false,
			};
		}
	}

	return state;
};
