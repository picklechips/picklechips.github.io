import React from 'react'
import './tile.css'

class Portfolio extends React.Component {
	render() {
		const {image, name, language} = this.props.project

		return (
			<div onClick={this.props.clicked} className="tile">
				<img className="tile-image" src={image}/>
				<div className="banner-bubble">
					{language}
				</div>
				<div className="banner">
					{name}
				</div>
			</div>
		)
	}
}

export default Portfolio