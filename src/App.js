import React from 'react';
import 'bulma/css/bulma.css';
import SignUp from './signup/SignUp'
import Container from './container/container.js'


const App = () => {
  return (
    <div>
      <SignUp />
      <Container />
    </div>
  );
};

export default App;
