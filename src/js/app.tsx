import * as React    from 'react';
import * as ReactDOM from 'react-dom';
import * as WebFont  from 'webfontloader';
import { Root }      from './components/root';

// Load the font from google
WebFont.load({
	google: {
		families: ['Fira Mono'],
	},
});

// The React App
ReactDOM.render(
	<Root />,
	document.getElementById('app')
);
