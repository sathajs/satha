import { useState, useEffect } from 'react';

type StoreState = any;

interface ISubscribeCallback {
  (state: StoreState): void;
}

interface ICreateStore {
  get: () => StoreState;
  set: (state: StoreState) => StoreState;
  reset: () => void;
  subscribe: (callback: ISubscribeCallback) => string;
  unsubscribe: (subscribeId: string) => void;
}

const storePlaceHolder = {
  get() {
    return '';
  },
  set() {},
  reset() {},
  subscribe() {
    return 'randomId';
  },
  unsubscribe() {},
};

export const useStore = (store: ICreateStore = storePlaceHolder) => {
  const [value, setValue] = useState(store.get());

  useEffect(() => {
    const subscribe = store.subscribe((state) => {
      setValue(state);
    });

    return () => {
      store.unsubscribe(subscribe);
    };
  }, [value, setValue]);

  return value;
};
