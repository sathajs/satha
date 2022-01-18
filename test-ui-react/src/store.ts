import { createStore, setDefaultStorageName } from '@satha/core';
import type { ICreateStore } from '@satha/core';

setDefaultStorageName('react-store');

export const numberStore: ICreateStore = createStore('number-save', 1);
export const numberSessionStore: ICreateStore = createStore('number-save', 1, {
  storageType: 'session',
});
