import React from 'react';
import { useExternal } from '@pansy/react-hooks';

export const ApiLoader: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const status = useExternal('//g.alicdn.com/AWSC/AWSC/awsc.js');

  return (
    <>
      {(status === 'ready') && children}
    </>
  )
}
