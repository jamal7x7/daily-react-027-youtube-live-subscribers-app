import React, { Component } from 'react'
import '../styles/App.css'

const Header = () => (
  <header className='App-header'>
    <h1 className='App-title'>Youtube Live Subscribers</h1>
  </header>
)

const Items = (props) => (
  <div className=' statistics '>
    <div className='subscribers'>

        {props.subscribers}

      </div>
  </div>
)

const Menu = () => (
  <div className='study-plan'>
    <div className='svg-input-wrap'>

      Menu

    </div>
  </div>
)

class StickersStoreApp extends Component {
  
  state = {
    subscribers : 0
  }

  componentDidMount() {
     
    const channelId = 'UCBJycsmduvYEL83R_U4JriQ'
    const key = 'AIzaSyAMZtznI7RBhaybdk-ZJSxpr0F0qMZEglM'
    const url = 'https://www.googleapis.com/youtube/v3/channels?key=' + key + '&id=' + channelId + '&part=snippet%2C+contentDetails%2C+statistics'
    
    console.log(url)
    //const url2 = "https://randomuser.me/api/";
    setInterval ( () => {
      
      fetch(url)
        .then(res =>  res.json())
        .then(data => {
  
            this.setState((prevState) => ({subscribers: data.items[0].statistics.subscriberCount}))
            console.log(this.state.subscribers)
  
          })
        .catch(error => { console.log('Something went wrong!!!', error) })

    } ,1000)
  }

  componentDidUpdate(prevProps, prevState) {
    
  }

  render () {
    return (
      <div 
      className='flash-cards-con'>

        <Menu />
        <Items subscribers={this.state.subscribers}/>

      </div>
    )
  }
}

const App = (props) => (
  <div className='App'>
    <Header />
    <StickersStoreApp />

  </div>
)

export default App

