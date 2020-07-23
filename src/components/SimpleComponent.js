// Code SimpleComponent Here
import React, {Component} from 'react'



class SimpleComponent extends Component { 
    constructor(){
        super()
        this.state = {
        mood: 'happy' 
        }
        
    }

    
    render(){
        return( 
         <div onClick={this.handleClick}>{this.state.mood}</div>
 
        )
    }

    handleClick = event => { 
        let newMood 
        if (this.state.mood === 'happy'){
            newMood = "sad"
        }
        else {
           newMood = "happy" 
        }
        this.setState({mood: newMood})
    }
}

export default SimpleComponent 