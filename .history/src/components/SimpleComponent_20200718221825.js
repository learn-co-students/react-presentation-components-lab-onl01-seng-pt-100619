// Code SimpleComponent Here
import React from 'react';

class SimpleComponent extends React.Component {
 state = {
     mood: "happy"
 }

 handleClick = () => {
    const newMood = this.state.mood === 'happy' ? 'sad' : 'happy';
    this.setState({mood: newMood});
 }


render(){
return <div onClick={this.state.mood}> </div>
    }
}

export default SimpleComponent