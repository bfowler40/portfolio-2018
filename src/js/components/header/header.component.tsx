import * as classNames from 'classnames';
import * as React      from 'react';
import SVG             from 'react-inlinesvg';
import { connect }     from 'react-redux';
import { menuToggle }  from '../../actions/menu.action';

import * as iconRocket from '../../../icons/rocket.svg';
import * as iconSkull  from '../../../icons/skull.svg';

@connect((store: any): any => {
	return {
		menuActive: store.menu.menuActive,
	};
})
export class Header extends React.Component<any, any> {

	public clickButton(e: Event): void {
		this.props.dispatch(menuToggle());
		(e.target as HTMLButtonElement).blur();
	}

	public render(): JSX.Element {
		const headerClass = classNames(
			'header', { 'header--menu_active': this.props.menuActive }
		);

		return (
			<header className={ headerClass }>
				<button
					name="Toggle Menu"
					onClick={ this.clickButton.bind(this) }
					className="header-toggle_menu">
					<SVG
						className="header-icon header-icon--close"
						src={ `${ iconSkull }` } />
					<SVG
						className="header-icon header-icon--open"
						src={ `${ iconRocket }` } />
				</button>
				<h1 className="headings-standard header-title">Ben Fowler</h1>
				<a
					href="mailto:bfowler40@gmail.com"
					tile="Contact me by email"
					className="colors-accent header-email">
					bfowler40@gmail.com
				</a>
			</header>
		);
	}
}
