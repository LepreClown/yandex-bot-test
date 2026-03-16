'use client';

import { type ReactNode } from 'react';

import NextNProgress from 'nextjs-progressbar';

interface IProgressBarProviderProps {
  children: ReactNode;
  themeColor: string;
}

export const ProgressBarProvider = ({
  children,
  themeColor,
}: IProgressBarProviderProps) => {
  return (
    <>
      <NextNProgress
        color={themeColor}
        options={{ showSpinner: false }}
      />

      {children}
    </>
  );
};
