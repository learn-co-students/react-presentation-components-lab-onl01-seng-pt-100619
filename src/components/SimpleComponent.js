// Code SimpleComponent Here
import React from 'react'

export default class SimpleCompontent extends React.Component {
    state = {mood: "happy"}   

    render() {
        return(<div onClick={this.handleClick}>{this.state.mood}</div>)
    }

    handleClick = () => {

        if (this.state.mood === "happy") {
            this.setState({mood: "sad"})
        } else if (this.state.mood === "sad") {
            this.setState({mood: "happy"})
        } else {
            this.setState({mood: "happy"})
        }
    
    }
}