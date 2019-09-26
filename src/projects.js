import React from 'react'

const projects = [
	{
		name: 'Skybunk',
		image: '/skybunk.png',
		language: 'JS',
		body: (
			<p>
				Skbyunk is an application across Android, iOS, and web. With over 500 users, Skybunk enables
				students living in University residences to stay connected.
			</p>
		),
		images: ['skybunk-screen-3.jpg', 'skybunk-screen-1.jpg', 'skybunk-screen-2.jpg'],
		links: {
			github: {
				source: 'https://github.com/cguc',
				text: 'View on github'
			},
			ios: {
				source: 'https://apps.apple.com/ca/app/skybunk/id1411727712',
				text: 'iOS App Store'
			},
			android: {
				source: 'https://play.google.com/store/apps/details?id=com.grebel.skybunk&hl=en_CA',
				text: 'play store'
			}
		}

	},
	{
		name: 'Medieval Magic',
		image: '/medmag.png',
		language: 'C#',
		body: (
			<p>
				A large scale, open world RPG, Medieval Magic is a fantasy themed adventure. Featuring 3 modes of combat and 8 unique skills, there is no shortage of things to explore.
			</p>
		),
		images: [],
		video: 'https://www.youtube.com/embed/enxHkKNDkiM',
		links: {
			indiedb: {
				source: 'https://www.indiedb.com/games/medieval-magic',
				text: 'IndieDb'
			}
		}
	},
	{
		name: 'BoardOn',
		image: '/supesnow.png',
		language: 'C++',
		body: (
			<p>
				Ride down an infinite mountain at top speed! BoardON is a game where you play as a snowboarder - 
				Dodging and jumping over obstacles in order to achieve the highest score possible.
			</p>
		),
		images: [],
		video: 'https://www.youtube.com/embed/lFYjTGlnWWw',
		links: {
			github: {
				source: 'https://github.com/picklechips/boardon',
				text: 'View on github'
			}
		}
	},
	{
		name: 'BraceLIT',
		image: '/bracelit.png',
		language: 'C++',
		body: (
			<p>
				A winner of Hack4Health 2016, Bracelit offers a peace-of-mind reminder service to those affected by Alzheimer's or Dementia
			</p>
		),
		images: ['bracelit-screen.png'],
		links: {
			github: {
				source: 'https://uwaterloo.ca/hack4health/about-hack4health/hack4health-20-winners',
				text: 'Hack4Health'
			}
		}
	},
	{
		name: 'Shark',
		image: '/sharkPool.png',
		language: 'Java',
		body: (
			<p>
				A Hack the North entry, SHARK is a crowd-sourcing mobile application that allows users to find and review pool tables nearest to them
			</p>
		),
		images: ['shark01.png', 'shark02.png'],
		links: {
			github: {
				source: 'https://github.com/MarCook-Pool/Pool',
				text: 'View on github'
			}
		}
	}
]

export { projects as default }