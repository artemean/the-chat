import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';
import ClearIcon from './ClearIcon';

function LoginBox(props) {
  const prepareProps = {...props};
  if (props.clearable) {
    prepareProps.icon=<ClearIcon onAClick={props.onClearLogin} />;
    delete prepareProps.clearable;
  }
  delete prepareProps.onClearLogin;
  return (
    <div className="login-box">
      <h1>Please introduce yourself</h1>
      <Input
        {...prepareProps}
      />
    </div>
  );
}

LoginBox.propTypes = {
  clearable: PropTypes.bool,
};

LoginBox.defaultProps = {
  clearable: false,
};

export default LoginBox;
