import * as React     from 'react';
import { connect }    from 'react-redux';
import { NavLink }    from 'react-router-dom';
import { menuToggle } from '../../actions/menu.action';

@connect((store: any) => {
	return {
		menuActive: store.menu.menuActive,
	};
})
export class Nav extends React.Component<any, any> {

	constructor(props: any) {
		super();
		this.menuItems = [
			'work',
			'skills',
			'about',
		];
	}

	public toggleMenu(): void {
		this.props.dispatch(menuToggle());
	}

	public render(): JSX.Element {
		return (
			<nav>
				{ this.props.menuActive ? 'menu-active' : 'menu-deactive' }
				<ul className="menu">
					{ this.menuItems.map((menuItem, index) => this.renderMenuItem(menuItem, index)) }
				</ul>
			</nav>
		);
	}

	/**
	 * Render a menu menu
	 *
	 * @param array menuItem
	 * @param int index
	 * @return string
	 */
	 public renderMenuItem(menuItem, index): JSX.Element {
		 return (
			 <li
			 	key={index}
				className="menu-item">
				<NavLink
				 	onClick={ this.toggleMenu.bind(this) }
					className="menu-link"
					activeClassName="menu-link--active"
					item={ menuItem }
					to={ `/${menuItem}` }>
					{ menuItem }
				</NavLink>
			 </li>
		 );
	 }
}
