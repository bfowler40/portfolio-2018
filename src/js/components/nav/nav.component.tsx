import * as React from 'react';
import { NavLink }   from 'react-router-dom';

export class Nav extends React.Component<any, any> {
	public render() {
		return (
			<nav>
				<NavLink activeClassName="active" to="/work">Work</NavLink>
				<NavLink activeClassName="active" to="/skills">Skills</NavLink>
				<NavLink activeClassName="active" to="/about">About</NavLink>
			</nav>
		);
	}
}
