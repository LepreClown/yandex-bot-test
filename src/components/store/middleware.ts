import { createStore, type StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

type TStoreCreator<T> = StateCreator<
  T,
  [['zustand/immer', never], ['zustand/devtools', never]],
  []
>;

export const createAppStore = <T>(
  name: string,
  storeCreator: TStoreCreator<T>
) =>
  createStore<T>()(
    immer(
      devtools(storeCreator, {
        name,
        enabled: process.env.NODE_ENV === 'development',
      })
    )
  );
