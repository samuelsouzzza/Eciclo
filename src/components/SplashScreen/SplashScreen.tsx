import React from 'react';
import { Wrapper, BoxLogo } from './Splash.styles.ts';
import { LogoMain } from '../Logos/LogoMain.tsx';

export const SplashScreen = () => {
  return (
    <Wrapper>
      <BoxLogo>
        <LogoMain />
      </BoxLogo>
    </Wrapper>
  );
};
