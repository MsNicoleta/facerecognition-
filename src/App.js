import React, { Component } from 'react';
// import ParticlesBg from 'particles-bg'
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';
// import ParticlesOptions from './ParticlesOptions';


class App extends Component {
    render(){
    return (
      <div className="App">
        {/* <ParticlesOptions/> */}
        {/* <ParticlesBg type="circle" bg={true} /> */}
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {/* <FaceRecognition/> */}
      </div>
    );
  }
}

export default App;
