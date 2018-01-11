import * as classNames from 'classnames';
import * as React      from 'react';
import { connect }     from 'react-redux';
import { NavLink }     from 'react-router-dom';
import { menuToggle }  from '../../actions/menu.action';
import { NavItem }     from './nav-item.component';

@connect((store: any): any => {
	return {
		menuActive: store.menu.menuActive,
		menuItems: store.menu.menuItems,
		menuItemHovered: store.menu.menuItemHovered,
	};
})
export class Nav extends React.Component<any, any> {

	public toggleMenu(): void {
		this.props.dispatch(menuToggle());
	}

	public render(): JSX.Element {
		const navClass = classNames(
			'nav', {
				'nav--menu_active': this.props.menuActive,
				'nav--menu_item_hovered': this.props.menuItemHovered,
			}
		);

		return (
			<nav className={ navClass }>
				<ul className="nav-list">
					{ this.props.menuItems.map((menuItem: any, index: number) => this.renderMenuItem(menuItem, index)) }
				</ul>
				<div className="nav-details">
					<div className="nav-description">
						<p>lorem ipsum</p>
						<p>lorem ipsum</p>
						<ul className="nav-contact">
							<li><a href="mailto:bfowler40@gmail.com">* bfowler40@gmail.com</a></li>
							<li><a href="#">* LinkedIn</a></li>
							<li><a href="#">* Github</a></li>
							<li><a href="#">* Resume</a></li>
							<li><a href="#">* 0412 462 774</a></li>
						</ul>
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
			<li className="headings-large nav-item" key={ index }>
				<NavItem menuItem={ menuItem } />
		 	</li>
		);
	}
}
