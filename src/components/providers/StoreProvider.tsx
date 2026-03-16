"use client";

import { createContext, type ReactNode, useContext, useRef } from "react";

import { createAppSettingsStore } from "../store/appSetting/store";
import { type ExtractState, useStore } from "zustand";

import type { IAppSettingsStore } from "../store/appSetting/types";

interface IStoreProviderProps {
  children: ReactNode;
  initialBanners?: any[];
  initialTimezone?: any;
}

interface IStoreContext {
  appSettings: ReturnType<typeof createAppSettingsStore>;
}

type TStoreTypeMap = {
  appSettings: IAppSettingsStore;
};

export const StoreContext = createContext<IStoreContext | null>(null);

export const StoreProvider = ({
  children,
  initialBanners,
  initialTimezone,
}: IStoreProviderProps) => {
  const storeRef = useRef<IStoreContext | null>(null);

  if (storeRef.current == null) {
    storeRef.current = {
      appSettings: createAppSettingsStore({
        banners: initialBanners,
        timezone: initialTimezone,
      }),
    };
  }

  // eslint-disable-next-line react-hooks/refs
  return <StoreContext.Provider value={storeRef.current}>{children}</StoreContext.Provider>;
};

export const useAppStore = <K extends keyof IStoreContext, T>(
  storeKey: K,
  selector: (state: TStoreTypeMap[K]) => T,
): T => {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error("useAppStore must be used within StoreProvider");
  }

  return useStore(context[storeKey], selector as (state: ExtractState<IStoreContext[K]>) => T);
};
