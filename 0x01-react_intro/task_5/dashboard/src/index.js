import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const App = () => {
  return (
    <div>
      <h1>Hello, Webpack!</h1>
      <img src="./images/sample.png" alt="Sample" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
