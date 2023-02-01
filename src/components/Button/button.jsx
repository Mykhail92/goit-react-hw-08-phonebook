import React from 'react';
import PropTypes from 'prop-types';
import { PhoneBtn } from './button.styled';

export default function Button({ children, onClick }) {
  return <PhoneBtn onClick={onClick}>{children}</PhoneBtn>;
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};
