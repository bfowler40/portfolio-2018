import * as classNames from 'classnames';
import * as React     from 'react';
import { connect }    from 'react-redux';
import { menuToggle } from '../../actions/menu.action';

@connect((store: any) => {
	return {
		menuActive: store.menu.menuActive,
	};
})
export class Header extends React.Component<any, any> {

	public clickButton(): void {
		this.props.dispatch(menuToggle());
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
					menu!
				</button>
				<h1 className="header-title">Ben Fowler</h1>
				<a
					href="mailto:bfowler40@gmail.com"
					tile="Contact me by email"
					className="header-email">
					bfowler40@gmail.com
				</a>
			</header>
		);
	}
}
