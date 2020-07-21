import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';



const bananasFunc = () => console.log('this shit is bananas')

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={alert('Clicked!')} />
  </div>,
  document.getElementById('root')
);