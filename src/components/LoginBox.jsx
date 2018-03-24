import React from 'react';
import PropTypes from 'prop-types';

function LoginBox(props) {
  return (
    <div className="login-box">
      <h1>Please introduce yourself</h1>
      <input type="text" onChange={props.onLoginChange} onKeyDown={props.onLoginKeyDown} />
    </div>
  );
}

LoginBox.propTypes = {
  onLoginChange: PropTypes.func,
  onLoginKeyDown: PropTypes.func,
};

LoginBox.defaultProps = {
  onLoginChange: () => {},
  onLoginKeyDown: () => {},
};

export default LoginBox;
