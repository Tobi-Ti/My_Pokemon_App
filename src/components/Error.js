// src/components/Error.js
import React from 'react';
import './Error.css';

function Error({ message }) {
  return <div className="error">Error: {message}</div>;
}

export default Error;
