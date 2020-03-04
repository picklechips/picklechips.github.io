import React from 'react'
import './animations.css'

class About extends React.Component {
	render() {
		return (
			<div className="fade-in">
				<h1>About <img src="canada.jpg" className="canada"/></h1>
				<p>I am a Canadian software engineer with a passion for developing unique web experiences and software systems.</p>
				<p>With a Bachelor of Software Engineering from the University of Waterloo, I have developed the necessary mindset in order to
				 offer robust, high quality software with ease. On top of my formal education, I have plenty of practical experience in the Industry allowing
				 me to succeed in a multitude of environments.</p>
			</div>
		)
	}
}

export default About