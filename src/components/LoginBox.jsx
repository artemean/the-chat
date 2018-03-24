import React from 'react';
// import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';

function LoginBox(props) {
  return (
    <div className="login-box">
      <h1>Please introduce yourself</h1>
      <Input {...props} />
    </div>
  );
}

// LoginBox.propTypes = {
//   onLoginChange: PropTypes.func,
//   onLoginKeyDown: PropTypes.func,
// };

// LoginBox.defaultProps = {
//   onLoginChange: () => {},
//   onLoginKeyDown: () => {},
// };

export default LoginBox;
