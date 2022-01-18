import { createStore } from './app';

export const numberStore = createStore('number-save', 1);
export const numberSessionStore = createStore('number-save', 1, {
  storageType: 'session',
});
