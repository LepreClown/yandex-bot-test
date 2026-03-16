"use client";

import { type ReactNode, useMemo } from "react";

import { AppContext } from "../context/helper";

import { is, Site } from "../hooks/useSite";

interface IAppProviderProps {
  children: ReactNode;
  site: Omit<Site, "is">;
}

export const AppProvider = ({ children, site }: IAppProviderProps) => {
  // Add `is` method to site object on client side
  const siteWithMethods = useMemo<Site>(() => {
    return {
      ...site,
      is,
    };
  }, [site]);

  return (
    <AppContext.Provider
      value={{
        site: siteWithMethods,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
