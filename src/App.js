import React from 'react';
import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';

class App extends React.Component {

  

  state = {
    counter: 0,
    names: ["Rob", "Ned", "Jon"],
    showCard: true,
    hideOrShow: "Hide Cards!"
 }

  btnFunc = () => {
    console.log("Button was clicked");
    this.setState({
      counter: this.state.counter +1
    })
    
  }

  nameBtnFunc = () => {
    console.log("Button was clicked");
    this.setState ({
      names: [this.state.names[1], this.state.names[2], this.state.names[0]]
    })
  } 

 
  
  hideCard = () => {
    // console.log("Button was clicked");
    if (this.state.showCard) {
      this.setState ({
        showCard : false,
        hideOrShow: "Show Cards!"
      })
    } else {
      this.setState ({
        showCard : true,
        hideOrShow: "Hide Cards!"
      })
    }
    
  }

  
  render() {
    return(
      <div>
        <Navbar
          link1="Home"
          link2="About"
          link3="Contact"
          pages={3}
        />
        <Card   
          name={this.state.names[0]}
          city="Salford"
          avatar="madking"
          visible={this.state.showCard}
        />
        <Card 
          name={this.state.names[1]} 
          city="Belfast"
          avatar="BobMarley"
          visible={this.state.showCard}
        />
        <Card 
          name={this.state.names[2]}
          city="Baghdad"
          avatar="diamond"
          visible={this.state.showCard}
        />

        <h1>
          My current counter is {this.state.counter}
        </h1>

          <a onClick={this.btnFunc} href="#" className="myBtn">Click Me</a>


          <a onClick={this.nameBtnFunc} href="#" className="myBtn">Change Names</a>
 

          <a onClick={this.hideCard} href="#" className="myBtn">{this.state.hideOrShow}</a>
 


      </div>
    );
  }
}

export default App;
