/**
 * Toggle the Nav
 *
 * @param {el} Element|boolan
 */

export const menuToggle = (el = false) => {
	return {
		payload: {
			el,
		}
		type: 'MENU_TOGGLE',
	};
};

export const menuItemMouseEnter = () => {
	return {
		payload: {},
		type: 'MENU_ITEM_MOUSE_ENTER',
	}
};

export const menuItemMouseLeave = () => {
	return {
		payload: {},
		type: 'MENU_ITEM_MOUSE_LEAVE',
	}
};
