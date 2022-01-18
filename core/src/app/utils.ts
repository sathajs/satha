const storeDefault = {
  storageName: 'satha-store-001',
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
