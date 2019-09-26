import React from 'react'
import './App.css'
import './animations.css'

class Details extends React.Component {
	renderImages() {
		const { images } = this.props.project

		return images.map(image => <img className="project-image" src={image}/>)
	}

	linkButtons() {
		const { links } = this.props.project

		return Object.values(links).map(link => <a href={link.source}><button>{link.text}</button></a>)
	}

	render() {
		const { name, body, links, video } = this.props.project
		return (
			<div className="fade-in-button1">
				<h1>
					{links.github ? <a href={links.github}><img className="github-logo" src="github.png"></img></a> : null}
					{ name }
				</h1>
				<div>{body}</div>
				<div className="row space-between">{ this.renderImages() }</div>
				{!video ? null :
					<div className="video-container">
						<iframe 
							className="video"
							src={video}
							frameBorder="0"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						/>
					</div>
				}
				<div>{this.linkButtons()}</div>
			</div>
		)
	}
}

export default Details