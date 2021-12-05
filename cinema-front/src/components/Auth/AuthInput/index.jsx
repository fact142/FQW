import * as React from 'react';

export const AuthInput = ({ value, onChange, placeholder }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      type="text"
      placeholder={placeholder}
    />
  );
};
