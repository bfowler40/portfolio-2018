import * as React from 'react';

export class About extends React.Component<any, any> {

	public render(): JSX.Element {
		return (
			<section className="content">
				<header className="content-header">
					<h2 className="headings-large content-title">About</h2>
					<div className="content-description">lorem ipsum</div>
				</header>
			</section>
		);
	}
}
