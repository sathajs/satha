import { createStore, setDefaultStorageName } from '@satha/core';

setDefaultStorageName('react-store');

export const numberStore = createStore('number-save', 1);
export const numberSessionStore = createStore('number-save', 1, {
  storageType: 'session',
});
