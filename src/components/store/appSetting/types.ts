export interface IAppSettingsState {
  banners: any[];
  timezone: any;
}

export interface IAppSettingsActions {
  setBanners: (banners: any[]) => void;
  setTimezone: (timezone: any) => void;
}

export interface IAppSettingsStore extends IAppSettingsState {
  actions: IAppSettingsActions;
}
