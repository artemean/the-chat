import React from 'react';

function LoginBox(props) {
  return (
    <div className="login-box">
      <h1>Please introduce yourself</h1>
      <input type="text" onChange={props.onLoginChange} onKeyDown={props.onLoginKeyDown} />
    </div>
  )
}

export default LoginBox;
