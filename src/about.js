import React from 'react'
import './animations.css'

class About extends React.Component {
	render() {
		return (
			<div className="fade-in">
				<h1>About <img src="canada.jpg" className="canada"/></h1>
				<p>I am a Canadian software engineer with a passion for developing unique web experiences and software systems.</p>
				<p>With a Bachelor's degree in Software Engineering from the University of Waterloo, I have developed the necessary mindset in order to
				 offer robust, high quality software with ease. On top of my formal education, I have plenty of practical experience in the Industry allowing
				 me to succeed in a multitude of environments.</p>
				<p>In my free time I love to snowboard, and love travelling to do so. My furthest excursion has been to Alaska. I'm a big Toronto Maple Leafs fan 
				and love to both play and watch hockey. I'm a huge nerd when it comes to video games and spend way too much time playing Super Smash Brothers.</p>

			</div>
		)
	}
}

export default About