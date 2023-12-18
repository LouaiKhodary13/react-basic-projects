import React, { useEffect } from 'react';

const Alert = ({ show, message, type }) => {
  return <h2 className={`alert alert-${type}`}>{message}</h2>;
};

export default Alert;
