import { type IAppSettingsStore } from './types';

export const bannersSelector = (state: IAppSettingsStore) => state.banners;

export const timezoneSelector = (state: IAppSettingsStore) => state.timezone;

export const appSettingsActionsSelector = (state: IAppSettingsStore) =>
  state.actions;
