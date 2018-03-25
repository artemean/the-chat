import React from 'react';
import PropTypes from 'prop-types';

function ClearIcon(props) {
  return (
    <div
      className="clear-icon"
      onClick={props.onClick}
      role="button"
      onKeyDown={props.onKeyDown}
      tabIndex={0}
    >
      X
    </div>
  );
}

ClearIcon.propTypes = {
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
};

ClearIcon.defaultProps = {
  onClick: () => {},
  onKeyDown: () => {},
};

export default ClearIcon;
