export type StoreState = any;
export type StoreName = string;

export type StorageType = string;
export type StorageName = string;

export interface IStoreConfig {
  storageType?: StorageType;
  storageName?: StorageName;
}

export interface ISubscribeCallback {
  (state: StoreState): void;
}

export interface ICreateStore {
  get: () => StoreState;
  set: (state: StoreState) => StoreState;
  reset: () => void;
  subscribe: (callback: ISubscribeCallback) => string;
  unsubscribe: (subscribeId: string) => void;
}

const storeDefault = {
  storageName: 'satha-store-001',
};

const storeConfigDefault = {
  storageType: '',
  storageName: '',
};

export const setDefaultStorageName = (name: string) => {
  if (!name || (name && typeof name !== 'string')) {
    console.error('setDefaultStorageName: name is a "string" value');
    return;
  }

  storeDefault.storageName = name;
};

export const getDefaultStorageName = () => {
  return storeDefault.storageName;
};

export const createStore = (
  name: StoreName,
  state: StoreState,
  config: IStoreConfig = storeConfigDefault,
): ICreateStore => {
  if (typeof localStorage === 'undefined') {
    return {
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
  }

  if (!name || (name && typeof name !== 'string')) {
    console.error('createStore: name is a "string" value');

    return {
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
  }

  const storageType = config.storageType ? config.storageType : 'local';
  const storageName = config.storageName ? config.storageName : getDefaultStorageName();

  const storage = getStorage(storageType, storageName);

  if (!storage[name]) {
    storage[name] = state;

    setStorage(storageType, storageName, storage);
  }

  const ps = subscriber();

  const get = () => {
    return getStore(storageType, storageName, name);
  };

  const set = (callback: ISubscribeCallback) => {
    const storageInternal = getStorage(storageType, storageName);
    const updatedStore = callback(storageInternal[name]);

    storageInternal[name] = updatedStore;

    setStorage(storageType, storageName, storageInternal);
    ps.publish(updatedStore);
  };

  const reset = () => {
    const storageInternal = getStorage(storageType, storageName);

    storageInternal[name] = state;

    setStorage(storageType, storageName, storageInternal);
    ps.publish(state);
  };

  const subscribe = (callback: ISubscribeCallback) => {
    if (!callback) {
      return '';
    }

    const id = `${Date.now()}`;

    ps.subscribe(id, callback);

    return id;
  };

  const unsubscribe = (id: string) => {
    if (!id) {
      return;
    }

    ps.unsubscribe(id);
  };

  return {
    get,
    set,
    reset,
    subscribe,
    unsubscribe,
  };
};

const getStorage = (storageType: StorageType, storageName: StorageName) => {
  const storage =
    storageType === 'session'
      ? sessionStorage.getItem(storageName)
      : localStorage.getItem(storageName);

  return JSON.parse(storage || '{}');
};

const getStore = (
  storageType: StorageType,
  storageName: StorageName,
  name: StoreName,
): StoreState => {
  const storage = getStorage(storageType, storageName);

  return storage[name];
};

const setStorage = (storageType: StorageType, storageName: StorageName, storage = {}) => {
  const storageStringify = JSON.stringify(storage);

  if (storageType === 'session') {
    sessionStorage.setItem(storageName, storageStringify);
  } else {
    localStorage.setItem(storageName, storageStringify);
  }
};

const subscriber = () => {
  let subscribers: any[] = [];

  function publish(state: any) {
    subscribers.forEach(({ id, callback }) => {
      if (id && callback) {
        callback(state);
      }
    });
  }

  function subscribe(id: string, callback: ISubscribeCallback) {
    subscribers.push({
      id,
      callback,
    });
  }

  function unsubscribe(id: string) {
    subscribers = subscribers.filter((subscriber) => subscriber?.id !== id);
  }

  return {
    publish,
    subscribe,
    unsubscribe,
  };
};
