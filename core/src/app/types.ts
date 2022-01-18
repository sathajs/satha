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
