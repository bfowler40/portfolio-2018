import * as React         from 'react';
import * as ReactMarkdown from 'react-markdown';
import { connect }        from 'react-redux';
import { menuToggle }     from '../../actions/menu.action';

import workData from '../../data/work';

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
			<section className="content">
				<header className="content-header">
					<h2 className="headings-large content-title">{ workData.title }</h2>
					<div className="content-description">
						{ workData.description }
						<br/>
						<h3 className="headings-standard">Y'all got any more of them awards?</h3>
						<div>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
						</div>
					</div>
				</header>

				{ workData.projects.map((project, index) => this.renderProject(project, index)) }

				<button onClick={ this.clickButton.bind(this) }>Sho Menu</button>
			</section>
		);
	}

	public renderProject(project, index): JSXElement {
		return (
			<div className="work-project" key={ index }>
				<h3 className="headings-medium work-project-title">{ project.title }</h3>
				<h4 className="headings-standard work-project-platform">{ project.platform }</h4>
				<div className="work-project-description">{ project.description }</div>
				<img className="work-project-image" src={ `/dist${ project.image}` } />
				<a	className="work-project-link"
					href={ project.url }
					target="_blank"
					rel="nofollow noreferrer">
					Website
				</a>
			</div>
		);
	}
}
