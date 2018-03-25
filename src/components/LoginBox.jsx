import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';
import ClearIcon from './ClearIcon';

function LoginBox(props) {
  if (props.clearable) {
    props.icon=<ClearIcon onClick={props.onClearLogin} />
  }
  return (
    <div className="login-box">
      <h1>Please introduce yourself</h1>
      <Input
        {...props}
      />
    </div>
  );
}

LoginBox.propTypes = {
  onLoginChange: PropTypes.func,
  onLoginKeyDown: PropTypes.func,
  clearable: PropTypes.bool,
};

LoginBox.defaultProps = {
  onLoginChange: () => {},
  onLoginKeyDown: () => {},
  clearable: false,
};

export default LoginBox;
