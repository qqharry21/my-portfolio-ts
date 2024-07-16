import { useState } from 'react';

import { safeParseJson } from '@/lib/utils';

export const useStorage = <T>(
  key: string,
  initialValue: T,
  type: 'local' | 'session' = 'local'
) => {
  const { get, set, remove } = getStorage(type);

  const [value, setValue] = useState<T>(get<T>(key, initialValue));

  const updateValue = (newValue: T) => {
    setValue(newValue);
    set(key, newValue);
  };

  const clearValue = () => {
    setValue(initialValue);
    remove(key);
  };

  return [value, updateValue, clearValue] as const;
};

const getStorage = (type: 'local' | 'session') => {
  const storage = type === 'local' ? localStorage : sessionStorage;

  const get = <T>(key: string, initialValue: T) => {
    const value = storage.getItem(key);
    if (value) {
      return safeParseJson(value) as T;
    }
    return initialValue;
  };

  const set = <T>(key: string, value: T) => {
    storage.setItem(key, JSON.stringify(value));
  };

  const remove = (key: string) => {
    storage.removeItem(key);
  };

  return { get, set, remove };
};
