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
			<section className="work">
				<header className="work-header">
					<h2 className="headings-large">{ workData.title }</h2>
					<div className="work-description">{ workData.description }</div>
				</header>
				<div className="work-examples">
					{ workData.projects.map((project, index) => this.renderProject(project, index)) }
				</div>
				<button onClick={ this.clickButton.bind(this) }>Sho Menu</button>
			</section>
		);
	}

	public renderProject(project, index): JSXElement {
		return (
			<div className="work-project" key={ index }>
				<h3 className="work-project-title">{ project.title }</h3>
				<h4 className="work-project-platform">{ project.platform }</h4>
				<div className="work-project-description">{ project.description }</div>
				<img className="work-project-image" src={ `/dist${ project.image}` } />
			</div>
		);
	}
}
