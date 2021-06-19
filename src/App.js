import React from 'react';
import 'bulma/css/bulma.css';
import SignUp from './signup/SignUp'
import Message from './container/message.js'

const App = () => {
  return (
    <div>
      <SignUp />
      <Message isInfo title='Hello World'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
      </Message>
    </div>
  );
};

export default App;
