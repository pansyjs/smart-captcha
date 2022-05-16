import React, { useEffect } from 'react';
import { useExternal, useBoolean } from '@pansy/react-hooks';

export const ApiLoader: React.FC = ({
  children,
}) => {
  const [loaded, loadedAction] = useBoolean(false);

  const status = useExternal('//g.alicdn.com/AWSC/AWSC/awsc.js');

  useEffect(
    () => {
      loadedAction.set(
        status === 'ready'
      )
    },
    [status]
  );

  return (
    <>
      {loaded && children}
    </>
  )
}
