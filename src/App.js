import React from 'react';
import './App.css';
import logo2 from './assets/logo2.png'
import background from './assets/back.jpg'
import users from './assets/user.svg'
import lock from './assets/lock.svg'
import head from './assets/head.png'

function App() {
  return (
    <div className="wrapper" style={{ backgroundImage: background }}>
      <header>
        <img src={head} alt='logo' style={{ height: '50px' }} />
      </header>
      <div className='login'>
        <div className='left' >
          <img className='logo' src={logo2} alt='logo' />
        </div>
        <div className='right'>
          <form>
            <p><b><span className='dash'>Login</span> as Admin</b></p>
            <div className='form-group'>
              <input type='email' placeholder='jondoe@gmail.com' />
              <img src={users} alt='User' />
            </div>

            <div className='form-group'>
              <input type='password' placeholder='xxxxxx' />
              <img src={lock} alt='Lock' />

            </div>
            <button>LOGIN</button>
            <div className='center'>
              <p className='gray'>Forgot Password</p>
              <p><a href='google.com'>Get help sign in</a></p>
            </div>
          </form>
          <p className='center' style={{ marginTop: '80px' }}><small className='gray'>Terms of use and Privacy Policy</small></p>
        </div>
      </div>
    </div>


  );
}

export default App;
