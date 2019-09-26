import React from 'react'
import './App.css'
import './animations.css'

class Employment extends React.Component {
	render() {
		return (
			<div className="fade-in">
				<h2 className="employment-header">Employment Status</h2>
				<h4 className="employment-subheader">Currently searching for full-time SWE opportunities, starting May 2020</h4>

				<h2 className="employment-header">Previous Employers</h2>
				<h3 className="employment-header"><img className="employment-logo" src="instacart.png"/>Instacart</h3>
				<h4 className="employment-subheader">Software Engineer</h4>

				<h3 className="employment-header"><img className="employment-logo" src="shopify.png"/>Shopify</h3>
				<h4 className="employment-subheader">Software Engineer</h4>

				<h3 className="employment-header"><img className="employment-logo" src="autodesk.ico"/>Autodesk</h3>
				<h4 className="employment-subheader">Software Engineer</h4>
				<div>
					<form method="get" action="resume.pdf" target="_blank">
						<a href="https://linkedin.com/in/ry-m" target="_blank"><button type="button">linkedin</button></a>
                        <button class="resumeBut btn" type="submit">resume</button>
                    </form>
				</div>
			</div>
		)
	}
}

export default Employment