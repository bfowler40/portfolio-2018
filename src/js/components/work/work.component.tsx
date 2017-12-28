import * as React     from 'react';
import { connect }    from 'react-redux';
import { menuToggle } from '../../actions/menu.action';

@connect((store: any): any => {
	return {
		menuActive: store.menu.menuActive,
	};
})
export class Work extends React.Component<any, any> {

	public clickButton(): void {
		this.props.dispatch(menuToggle());
	}

	public render(): JSX.Element {
		return (
			<section>
				This is my work!
				<button onClick={ this.clickButton.bind(this) }>Click Me</button>
			</section>
		);
	}
}
