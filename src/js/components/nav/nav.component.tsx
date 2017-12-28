import * as classNames from 'classnames';
import * as React      from 'react';
import { connect }     from 'react-redux';
import { NavLink }     from 'react-router-dom';
import { menuToggle }  from '../../actions/menu.action';

@connect((store: any): any => {
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
				<ul className="nav-list">
					{ this.props.menuItems.map((menuItem: any, index: number) =>
							this.renderMenuItem(menuItem, index)) }
				</ul>
				<div className="nav-description">
					<div className="test">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</div>
				</div>
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
				className="headings-large nav-item">
				<NavLink
				 	onClick={ this.toggleMenu.bind(this) }
					className="nav-link"
					activeClassName="nav-link--active"
					to={ `/${ menuItem.slug }` }>
					{ menuItem.title }
				</NavLink>
				<span
					className="colors-background_accent nav-effect"
					item={ menuItem.title }>
				</span>
			 </li>
		 );
	 }
}
