import { useState, useEffect } from 'react';

type StoreState = any;

interface ISubscribeCallback {
  (state: StoreState): void;
}

interface IStore {
  get: () => StoreState;
  subscribe: (callback: ISubscribeCallback) => string;
  unsubscribe: (subscribeId: string) => void;
}

export const useStore = (store: IStore) => {
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
