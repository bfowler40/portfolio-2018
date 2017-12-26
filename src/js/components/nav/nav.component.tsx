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

	public toggleMenu(): void {
		this.props.dispatch(menuToggle());
	}

	public render(): JSX.Element {
		return (
			<nav>
				{ this.props.menuActive ? 'menu-active' : 'menu-deactive' }
				<ul>
					<li>
						<NavLink onClick={ this.toggleMenu.bind(this)} activeClassName="active" to="/work">Work</NavLink>
					</li>
					<li>
						<NavLink onClick={ this.toggleMenu.bind(this)} activeClassName="active" to="/skills">Skills</NavLink>
					</li>
					<li>
						<NavLink onClick={ this.toggleMenu.bind(this)} activeClassName="active" to="/about">About</NavLink>
					</li>
				</ul>
			</nav>
		);
	}
}
