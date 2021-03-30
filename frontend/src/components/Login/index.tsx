import React, { useState } from 'react';

import { CSSTransition } from 'react-transition-group'

import { Container, Bgc } from './styles';

const Login: React.FC = () => {
  interface Iinputs {
    email: string;
    password: string;
    username: string;
    emailRegister: string;
    passwordRegister: string;
  }
  
  const initializeValue: Iinputs[] = [
    {
      email: "",
      password: "",
      username: "",
      emailRegister: "",
      passwordRegister: "",
    }
  ]

  const [MenuNow, setMenuNow] = useState('login')
  const [error1, setError1] = useState('')
  const [inputs, setInputs] = useState(initializeValue)

  const handleChange = (e: any) => {
    const {name, value} = e.target
    console.log(inputs)
    setInputs(prev => ({...prev, [name]: value}))
  }

  const handleCreateAccount = () => {

  }

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
            <input type="text" name="email" onChange={handleChange} value={inputs.email}/>
          </div>
          <div className="input">
            <label htmlFor="password">PASSWORD</label>
            <input type="password" name="password" onChange={handleChange} value={inputs.password}/>
          </div>
          <button>Login</button>
          <h1>An account unnexist</h1>
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
            <label htmlFor="username">USERNAME</label>
            <input type="text" name="username"  onChange={handleChange} value={inputs.username}/>
          </div>
          <div className="input">
            <label htmlFor="email">EMAIL</label>
            <input type="text" name="email"  onChange={handleChange} value={inputs.emailRegister}/>
          </div>
          <div className="input">
            <label htmlFor="password">PASSWORD</label>
            <input type="password" name="password"  onChange={handleChange} value={inputs.passwordRegister}/>
          </div>

          <button>Continue</button>
          <p><span onClick={() => setMenuNow('login')}>Already have an account?</span></p>
        </main>
      </CSSTransition>
    </Container>
  );
}

export default Login;