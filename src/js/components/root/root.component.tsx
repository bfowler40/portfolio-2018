import * as React   from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import  store       from '../../store/store';
import { Header }    from '../header';
import { Main }     from '../main';
import { Nav }      from '../nav';

export class Root extends React.Component<any, any> {

	public render(): JSX.Element {
		return (
			<Provider store={ store }>
				<BrowserRouter>
					<div className="container">
						<Header />
						<Nav />
						<Main />
					</div>
				</BrowserRouter>
			</Provider>
		);
	}
}
