// Code SimpleComponent Here
import React from 'react';

class SimpleComponent extends React.Component {
 state = {
     mood: "happy"
 }


render(){
return <div> I am Just {this.state.mood}</div>;
    }
}

export default SimpleComponent