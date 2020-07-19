// Code SimplerComponent Here
import React from 'react';

class SimplerComponent extends React.Component {

render(){
    return <div onClick={this.handleClick}>{this.state.mood} </div>
}
}

export default SimplerComponent
