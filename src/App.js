import React from 'react';
import Portfolio from './portfolio'
import About from './about'
import Employment from './employment'
import Details from './details'
import './App.css';
import './animations.css'

const typeDelay = 35
const greeting = "Hello.\n\n\n\n\n\n My name is Ryan."
const tagline = "I am a Software Engineer."

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      liveGreeting: "",
      liveTagline: "",
      showActions: false,
      content: null,
      curProject: null,
    }
  }

  async componentDidMount() {
    await this.typeGreeting('liveGreeting', "", greeting, async () => {
      await sleep(500)
      await this.typeGreeting('liveTagline', "", tagline, this.revealActions.bind(this))
    })
  }

  async revealActions() {
    await sleep(500)
    this.setState({
      showActions: true,
    })

    await sleep(1500)
    this.setState({
      content: 'employ'
    })
  }

  async typeGreeting(key, curMessage, finalMessage, callback) {
    if (curMessage.length === finalMessage.length) {
      if (callback) callback()
      return
    }

    await sleep(typeDelay)
    this.setState({
        [key]: curMessage + finalMessage[curMessage.length]
      },
      () => this.typeGreeting(key, this.state[key], finalMessage, callback))
  }

  renderContent() {
    const { content } = this.state
    if (content === 'portfolio') return <Portfolio className="fade-in" onClickProject={this.onProjectClick.bind(this)}/>
    if (content === 'about') return <About className="fade-in"/>
    if (content === 'employ') return <Employment className="fade-in"/>
    if (content === 'details') return (
      <div>
      <button onClick={this.onBackClick.bind(this)}>back</button>
      <Details project={this.state.curProject}/>
      </div>
    )
    return null
  }

  onButtonClick(name) {
    return () => {
      this.setState({
        content: name 
      })
    }
  }

  onProjectClick(proj) {
    this.setState({
      curProject: proj,
      content: 'details'
    })
  }

  onBackClick() {
    this.setState({
      content: 'portfolio'
    })
  }

  render() {
    return (
      <div className="App">
        <div className="body">

          <div className="column">
            <img className="profypic" src="/profypic.jpg"/>

            <div className="row social-row">
              <a href="https://github.com/picklechips" target="_blank">
                <img className="github-small" src="github-1.png" width="20px" height="20px" alt="Github" />
              </a>
              <a href="https://linkedin.com/in/ry-m" target="_blank">
                <img src="linkedin.png" width="20px" height="20px" alt="LinkedIn"/>
              </a>
            </div>
            <p className="email">contact@ryanmartin.tech</p>
          </div>

          <div className="action-group">
            <p>{this.state.liveGreeting}</p>
            <p>{this.state.liveTagline}</p>
            {!this.state.showActions ? null :
              <div className="button-group">
                <button className="fade-in-button1 nav-button" onClick={this.onButtonClick('portfolio')}>portfolio</button>
                <button className="fade-in-button2 nav-button" onClick={this.onButtonClick('about')}>about</button>
                <button className="fade-in-button3 nav-button" onClick={this.onButtonClick('employ')}>employment</button>
              </div>
            }
          </div>
          <div className="content">
            {this.renderContent()}
          </div>
        </div>
      </div>
    );
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default App;
