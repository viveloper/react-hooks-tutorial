import React from 'react';

const Row = ({ label, children }) => {
  return (
    <div className="row">
      <label>{label}</label>
      <div className="info">{children}</div>
    </div>
  );
};

export default Row;
