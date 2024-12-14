import React from 'react';

export const Layout = ({ children, className }) => {
  return <div className={`${className} px-44`}>{children}</div>;
};
