import React from 'react';
import './App.css';
import logo2 from './assets/logo2.png'
import user from './assets/user.png'

function App() {
  return (
    <div className="App">
      <div className='header'>
        <div className='logo'>
          <img src={logo2} alt='Logo' />
        </div>
      </div>
      <div className='wrapper'>
        <div className='main'>
          <div className='aside'>
            <img src={user} alt='user' />
          </div>
          <div className='content'>
            <div className='login-form'>
              Login Form
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
