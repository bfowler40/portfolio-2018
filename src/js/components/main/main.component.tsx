import * as classNames from 'classnames';
import * as React      from 'react';
import { connect }     from 'react-redux';
import {
	Redirect,
	Route,
	Switch,
}     				   from 'react-router-dom';
import { About }       from '../about';
import { Skills }      from '../skills';
import { Work }        from '../work';

@connect((store: any) => {
	return {
		menuActive: store.menu.menuActive,
	};
})
export class Main extends React.Component<any, any> {

	public render(): JSX.Element {
		const mainClass = classNames(
			'main', { 'main--menu_active': this.props.menuActive }
		);

		return (
			<main className={ mainClass }>
				<Switch>
					<Route path="/about"  component={ About } />
					<Route path="/skills" component={ Skills } />
					<Route path="/work"   component={ Work } />
					<Redirect to="/work" />
				</Switch>
			</main>
		);
	}
}
