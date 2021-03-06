import * as classNames from 'classnames';
import * as React      from 'react';
import { connect }     from 'react-redux';
import { NavLink }     from 'react-router-dom';
import {
	menuItemMouseEnter,
	menuItemMouseLeave,
	menuToggle
}  from '../../actions/menu.action';

import * as campos from '../../../images/work-campos.jpg';
import * as nous   from '../../../images/work-nous.jpg';

@connect((store: any): any => {
	return {
		menuActive: store.menu.menuActive,
		menuDefault: store.menu.menuDefault,
		menuItems: store.menu.menuItems,
	};
})
export class NavItem extends React.Component<any, any> {

	public toggleMenu(event: Event): void {
		this.props.dispatch(menuToggle());
	}

	public onMouseEnter(): void {
		this.props.dispatch(menuItemMouseEnter());
	}

	public onMouseLeave(): void {
		this.props.dispatch(menuItemMouseLeave());
	}

	public render(): void {
		const activeItem : boolean = (
			this.props.menuItem.slug === this.props.menuDefault &&
			location.pathname === '/'
		);
		const navItemClass: any = classNames(
			'nav-link', { 'nav-link--active': activeItem }
		);


		return (
			<div>
				<NavLink
					onClick={ this.toggleMenu.bind(this) }
					onMouseEnter={ this.onMouseEnter.bind(this) }
					onMouseLeave={ this.onMouseLeave.bind(this) }
					className={ navItemClass }
					activeClassName="nav-link--active"
					to={ `/${ this.props.menuItem.slug }` }>
					{ this.props.menuItem.title }
				</NavLink>
				<span
					className="colors-background_accent nav-effect"
					item={ this.props.menuItem.title }>
				</span>
				{ this.temp() }
			</div>
		);
	}



	public temp() {
		if (
			this.props.menuItem.slug === this.props.menuDefault
		) {
			return (
				<div>
					<img className="image image-campos" src={ `${campos}`} />
					<img className="image image-nous" src={ `${nous}`} />
				</div>
			);
		}
	}

}
