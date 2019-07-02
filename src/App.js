import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

let points = 0;
let highScore = 0;
let friendArr = friends;

class App extends Component {
 
  state = {
    friendArr,
  };

  restart = () => {
    for (var i = 0 ; i <friendArr.length; i++) {
      friendArr[i]["clicked"] = "n";
    }
    this.setState(friendArr);
    points = 0;
  }

  markClicked = (id) => {
    const friendClicked = this.state.friendArr.filter(friend => friend.id === id);
    if (friendClicked[0]["clicked"] === "n") {
      friendClicked[0]["clicked"] = "y";
      points++;
      if (points > highScore) {
        highScore++;
        if (points === 12) {
          alert("You win!");
          this.restart();
        }
      }
    } else {
      alert("Game Over");
      this.restart();
    }   
    this.setState(friendArr);
    this.shuffleFriends();
  };

  shuffleFriends = () => {
    this.state.friendArr.sort((() => Math.random() - 0.5));
  }

  getInstruction = () => {
    if (points === 0) {
      return ("Click a character to begin")
    } else {
      return ("You guessed correctly!")
    }
  }
  // Map over this.state.friends and render a Clicky Character component for each friend object
  render() {
    return (
      <Wrapper>
        <Title title={title} points={points} highScore={highScore} instruction={this.getInstruction()}></Title>
        <div style={divStyle}></div>
        {friendArr.map(friend => (
          <FriendCard
            markClicked={this.markClicked}
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            
          />
        ))}
      </Wrapper>
    );
  }
}

const title = "Clicky Game";
const divStyle = {
  height:'50px',
  width: '100%'
}
export default App;
