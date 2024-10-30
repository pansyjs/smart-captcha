import { useExternal } from '@pansy/use-external';
import React from 'react';

export interface LoaderProps {
  children?: React.ReactNode;
  loading?: React.ReactNode;
}

export function Loader(props: LoaderProps) {
  const { children, loading } = props;
  const status = useExternal('//g.alicdn.com/AWSC/AWSC/awsc.js');

  if (status === 'loading' && loading) {
    return loading;
  }

  return (
    <>
      {(status === 'ready') && children}
    </>
  );
}
