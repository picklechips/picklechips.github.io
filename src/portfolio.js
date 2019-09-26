import React from 'react'
import Tile from './tile'
import Projects from './projects'
import './App.css'
import './animations.css'

class Portfolio extends React.Component {
	render() {
		const onClick = (project) => {
			console.log(project)
			return () => {
				this.props.onClickProject(project)
			}
		}

		const buildTiles = () => {
			const tiles = []
			Projects.forEach(proj => {
				tiles.push(
					<Tile clicked={onClick(proj)} project={proj}/>
				)
			})
			return tiles
		}

		return (

			<div className="fade-in">
				<h1>Portfolio</h1>
				<div className="portfolio-row">
					{buildTiles()}
				</div>
			</div>
		)
	}
}

export default Portfolio