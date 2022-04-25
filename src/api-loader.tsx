import React, { useEffect } from 'react';
import { useExternal, useBoolean } from '@pansy/react-hooks';

import { NVCOption } from './config';

window.globalThis.NVC_Opt = NVCOption;

export const ApiLoader: React.FC = ({
  children,
}) => {
  const [loaded, loadedAction] = useBoolean(false);

  const smartStatus = useExternal('//g.alicdn.com/sd/smartCaptcha/0.0.4/index.js');
  const quizStatus = useExternal('//g.alicdn.com/sd/quizCaptcha/0.0.1/index.js');
  const guideStatus = useExternal('//g.alicdn.com/sd/nvc/1.1.112/guide.js');


  useEffect(
    () => {
      loadedAction.set(
        smartStatus === 'ready' &&
        quizStatus === 'ready' &&
        guideStatus === 'ready'
      )
    },
    [smartStatus, quizStatus, guideStatus]
  );

  return (
    <>
      {loaded && children}
    </>
  )
}
