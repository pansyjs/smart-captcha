import { useExternal } from '@pansy/use-external';
import React from 'react';

interface LoaderProps {
  children?: React.ReactNode;
}

export function Loader(props: LoaderProps) {
  const { children } = props;
  const status = useExternal('//g.alicdn.com/AWSC/AWSC/awsc.js');

  return (
    <>
      {(status === 'ready') && children}
    </>
  );
}
