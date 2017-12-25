import * as React     from 'react';
import { connect }    from 'react-redux';
import { menuToggle } from '../../actions/menu.action';

@connect((store) => {
	return {
		menuActive: store.menu.menuActive,
	};
})
export class Work extends React.Component<any, any> {
	constructor(props: {}) {
		super(props);
	}

	public clickButton(): void {
		this.props.dispatch(menuToggle());
	}

	public render(): JSX.Element {
		return (
			<section>
				This is my work!
				{ this.props.menuActive ? 'menu-active' : 'menu-deactive' }
				<button onClick={ this.clickButton.bind(this) }>Click Me</button>
			</section>
		);
	}
}
