import React, { ReactNode, useEffect, useState } from 'react';

const transportedComponent: Set<ReactNode> = new Set();

let listener: () => void = () => {};

const PortalContext = () => {
  const [, forceUpdate] = useState<number>(0);

  useEffect(() => {
    listener = () => {
      forceUpdate(Date.now());
    };
  }, []);

  return <>{transportedComponent || null}</>;
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
    transportedComponent.add(children);
    listener();

    return () => {
      transportedComponent.delete(children);
      listener();
    };
  }, [children]);

  return null;
};
