/**
 * Toggle the Nav
 *
 * @param el Element|boolan
 */

export const menuToggle = (el = false) => {
	return {
		payload: {
			el,
		}
		type: 'MENU_TOGGLE',
	};
};
