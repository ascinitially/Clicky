import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

let points = 0;
let friendArr = friends;
class App extends Component {
  // Setting this.state.friends to the friends json array
 
  state = {
    friendArr,
  };

  // friendClick = id => {
  //   const friends = this.state.friends.filter(friend => friend.id !== id);

  // }

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };
  processClick = (id) => {
    // const friendClicked = this.state.friendArr.filter(friend => friend.id ===id);
    const friendClicked= this.state.friendArr.filter(friend => friend.id === id)
    if (friendClicked["clicked"] === "n") {
      points++;
      console.log(points);
    }
  }

  restart = () => {
    for (var i = 0 ; i <friendArr.length; i++) {
      friendArr[i]["clicked"] = "n";
    }
    this.setState(friendArr);
    points = 0;
  }

  // unclickFriend = () 

  markClicked = (id) => {
    const friendClicked = this.state.friendArr.filter(friend => friend.id === id);
    // this.processClick(id);
    if (friendClicked[0]["clicked"] === "n") {
      friendClicked[0]["clicked"] = "y";
      points++;
    } else {
      alert("Game Over");

      this.restart();
    }   
    this.setState(friendArr);
    console.log(this.state);
    this.shuffleFriends();
  };

  shuffleFriends = () => {
    this.state.friendArr.sort((() => Math.random() - 0.5));
    // this.render();
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        {/* <Navbar></Navbar> */}
        <Title>{title} {points}</Title>

        {friendArr.map(friend => (
          <FriendCard
            markClicked={this.markClicked}
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

const title = "Clicky Game";

export default App;
