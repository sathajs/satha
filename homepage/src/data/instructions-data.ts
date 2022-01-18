export const instructionsCodes = {
  install: `
// npm
npm i @satha/core

// pnpm
pnpm add @satha/core`,
  store: `
import { createStore } from '@satha/core';

const numberStore = createStore('number-save', 1);`,
  useStore: `
// get value
const number = numberSave.get();

// set value
numberSave.set((state) => state + 1);`,
  createAndUseStore: `
import { createStore } from '@satha/core';

const numberStore = createStore('number-save', 1);

// get value
const number = numberSave.get();

console.log(number)

// set value
numberSave.set((state) => state + 1);`,

  multiValueStore: `
...
// user info
const userInfoStore = createStore('userInfo', {
  name: 'S. Dogg',
  age: 40,
  birthPalce: 'LA'
});

// get value
const { name } = userInfoStore.get();

// log value
console.log(name);

// change age
userInfoStore.set(state => {
  state.age = 50;
  return state;
})

// get value
const { age } = userInfoStore.get();

// log value
console.log(age);`,
  resetValue: `
...
numberSave.reset();`,
  sessionStorage: `
...
const numberSave = createStore('number-save', 1, {
  storageType: 'session',
});`,
  newLocalStorage: `
...
const numberSave = useStorage('number-save', 1, {
  storageName: 'alt-storage',
});`,
  newSessionStorage: `
import {
  createSessionStorage,
  useStorage
} from '@satha/core';

const sessionStorageNumber = createSessionStorage(
  'session-number'
);

const numberSave = useStorage(
  'number-save',
  1,
  ...sessionStorageNumber
);`,
  changeDefaultStorageName: `
import {
  setDefaultStorageName,
} from '@satha/core';

setDefaultStorageName('alt-store');`,
  sublinkHack: `
import {
  createLocalStorage,
} from '@satha/core';

// use unique name for each site
createLocalStorage(
  'satha-store-001', { defaultStorage: true }
);

// after this useStorage can be used
`,
  subscribe: `
...
const numberSave = createStore('number-save', 1);

// initial value
let numberValue = numberSave.get();

// subscribe
const subscribe = numberSave.subscribe((state) => {
  // update value
  numberValue = state;
})

// action to set data: can be used as onClick event
const handleSetData = () => {
  // subscribe callback will be triggered after this action
  numberSave.set((state) => state + 1);
}

// optional: unsubscribe on unmount
// numberSave.unsubscribe(subscribe)`,
  useStorage: `
// Props
useStorage(
  name: String [required];
  state: any;

  // extra Props
  type: 'local' [default] | 'session';
  storageName: String;
);

// Methods
const store = useStorage('store', 0);

store.get(); // value: 0

store.set(state => state + 1); // value: 1

store.reset(); // value: 0

store.subscribe((state) => {
  // do your thing
}); // will return a unique id

store.unsubscribe(subscribe); // use subscribe id

store.unsubscribeAll();
`,
  createLocalStorage: `
// * same is applicable for createSessionStorage
// Props
createLocalStorage(
  storageName: String [required];
  // extra options
  config: {
    defaultStorage: Bool = false;
  };
);

// output: [type, storageName]

`,
  typescript: `
import { createStore } from '@satha/core';
import type { ICreateStore } from '@satha/core';

const numberStore: ICreateStore = createStore('number-save', 1);

// get value
const number = numberSave.get();

console.log(number)

// set value
numberSave.set((state: number) => state + 1);
`,
  reactHook: `
import React from 'react';
import { createStore } from '@satha/core';
import { useStore } from '@satha/react';

const numberStore = createStore('number-save', 1);

function App() {
  const numValue = useStore(numberStore);

  const onDecrement = () => {
    numberStore.set((state) => state - 1);
  };

  const onIncrement = () => {
    numberStore.set((state) => state + 1);
  };

  return (
    <div className="App">
      <h1>Test</h1>
      <div>LocalStorage: {numValue}</div>
      <button onClick={onDecrement}>-</button> <button onClick={onIncrement}>+</button>
    </div>
  );
}

export default App;
`,
  reactHookTs: `
import React from 'react';
import { createStore } from '@satha/core';
import { useStore } from '@satha/react';
import type { ICreateStore } from '@satha/core';

const numberStore: ICreateStore = createStore('number-save', 1);

function App() {
  const numValue = useStore(numberStore);

  const onDecrement = () => {
    numberStore.set((state: number) => state - 1);
  };

  const onIncrement = () => {
    numberStore.set((state: number) => state + 1);
  };

  return (
    <div className="App">
      <h1>Test</h1>
      <div>LocalStorage: {numValue}</div>
      <button onClick={onDecrement}>-</button> <button onClick={onIncrement}>+</button>
    </div>
  );
}

export default App;
`,
  reactHookInstall: `
// npm
npm i @satha/react

// pnpm
pnpm add @satha/react`,
};
