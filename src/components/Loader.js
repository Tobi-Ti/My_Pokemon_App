// src/components/Error.js
import React from 'react';
import './Error.css'; // Add some styles for the error message

const Error = ({ message }) => (
  <div className="error">
    Error: {message}
  </div>
);

export default Error;
