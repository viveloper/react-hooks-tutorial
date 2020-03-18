import React from 'react';

const Row = ({ label, children }) => {
  return (
    <div className="row">
      <label>{label}</label>
      {children}
    </div>
  );
};

export default Row;
