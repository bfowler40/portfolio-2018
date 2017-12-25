import * as React   from 'react';
import { Provider } from 'react-redux';
import {
	BrowserRouter,
	Redirect,
	Route,
	Switch,
}                   from 'react-router-dom';
import  store       from '../../store/store';
import { About }    from '../about';
import { Nav }      from '../nav';
import { Skills }   from '../skills';
import { Work }     from '../work';

export class Root extends React.Component<any, any> {
	public render(): JSX.Element {
		return (
			<Provider store={ store }>
				<BrowserRouter>
					<div className="container">
						<Nav />
						<main>
							<Switch>
								<Route path="/about"  component={ About } />
								<Route path="/skills" component={ Skills } />
								<Route path="/work"   component={ Work } />
								<Redirect to="/work" />
							</Switch>
						</main>
					</div>
				</BrowserRouter>
			</Provider>
		);
	}
}
