import * as classNames from 'classnames';
import * as React      from 'react';
import { connect }     from 'react-redux';
import { NavLink }     from 'react-router-dom';
import { menuToggle }  from '../../actions/menu.action';

@connect((store: any) => {
	return {
		menuActive: store.menu.menuActive,
		menuItems: store.menu.menuItems,
	};
})
export class Nav extends React.Component<any, any> {

	public toggleMenu(): void {
		this.props.dispatch(menuToggle());
	}

	public render(): JSX.Element {
		const navClass = classNames(
			'nav', { 'nav--menu_active': this.props.menuActive }
		);

		return (
			<nav className={ navClass }>
				<ul className="menu">
					{ this.props.menuItems.map((menuItem: any, index: number) =>
							this.renderMenuItem(menuItem, index)) }
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
	 public renderMenuItem(menuItem: any, index: number): JSX.Element {
		 return (
			 <li
			 	key={index}
				className="menu-item">
				<NavLink
				 	onClick={ this.toggleMenu.bind(this) }
					className="menu-link"
					activeClassName="menu-link--active"
					item={ menuItem }
					to={ `/${ menuItem }` }>
					{ menuItem }
				</NavLink>
			 </li>
		 );
	 }
}
