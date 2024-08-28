import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Login from './Login/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-body">
        <Login />
      </div>
      <Footer />
    </div>
  );
}

export default App;
