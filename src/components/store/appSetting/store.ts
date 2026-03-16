import { createAppStore } from "../middleware";

import type { IAppSettingsState, IAppSettingsStore } from "./types";

const defaultState: IAppSettingsState = {
  banners: [],
  timezone: {
    site_timezone: "",
  },
};

export const createAppSettingsStore = (initialState?: Partial<IAppSettingsState>) =>
  createAppStore<IAppSettingsStore>("appSettings", (set) => ({
    ...defaultState,
    ...initialState,

    actions: {
      setBanners: (banners) => {
        set({ banners }, false, "appSettings/setBanners");
      },
      setTimezone: (timezone) => {
        set({ timezone }, false, "appSettings/setTimezone");
      },
    },
  }));
