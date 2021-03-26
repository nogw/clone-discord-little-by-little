import React, { useState } from 'react';

import { CSSTransition } from 'react-transition-group'

import { Container, Bgc } from './styles';

const Login: React.FC = () => {
  const [MenuNow, setMenuNow] = useState('login')
  
  return (
    <Container>
      <CSSTransition 
        in={MenuNow === 'login'}
        unmountOnExit 
        timeout={500} 
        classNames="menu-primary"
      >
        <main>
          <h1>Welcome back!</h1>
          <h4>We're so excited to see you again!</h4>

          <div className="input">
            <label htmlFor="email">EMAIL</label>
            <input type="text" name="email"/>
          </div>
          <div className="input">
            <label htmlFor="password">PASSWORD</label>
            <input type="password" name="password"/>
          </div>
          <button>Login</button>
          <p>Need an account? <span onClick={() => setMenuNow('register')}>Register</span></p>
        </main>
      </CSSTransition>
      <CSSTransition 
        in={MenuNow === 'register'}
        unmountOnExit 
        timeout={500} 
        classNames="menu-primary"
      >
        <main>
          <h1>Create an account</h1>
          <div className="input">
            <label htmlFor="email">EMAIL</label>
            <input type="text" name="email"/>
          </div>
          <div className="input">
            <label htmlFor="username">USERNAME</label>
            <input type="text" name="username"/>
          </div>
          <div className="input">
            <label htmlFor="password">PASSWORD</label>
            <input type="password" name="password"/>
          </div>

          <button>Continue</button>
          <p><span onClick={() => setMenuNow('login')}>Already have an account?</span></p>
        </main>
      </CSSTransition>
    </Container>
  );
}

export default Login;