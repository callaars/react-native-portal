import React, { ReactElement, useEffect, useState } from 'react';

let listener: () => void = () => {};
let transportedComponent: ReactElement;

const PortalContext = () => {
  const [, forceUpdate] = useState<number>(0);

  useEffect(() => {
    listener = () => {
      forceUpdate(Date.now());
    };
  }, []);

  return transportedComponent || null;
};

export const PortalProvider: React.FC = ({ children }) => {
  return (
    <>
      <PortalContext />
      {children}
    </>
  );
};

export const Portal: React.FC = ({ children }) => {
  useEffect(() => {
    transportedComponent = <>{children}</>;
    listener();

    return () => {
      transportedComponent = <></>;
      listener();
    };
  }, [children]);

  return null;
};
