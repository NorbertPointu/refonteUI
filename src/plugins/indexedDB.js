export const initCache = () => {
  const request = window.indexedDB.open('APIWrapper', 1);

  request.onsuccess = () => {
    // get database from event
    // const db = event.target.result;
    // console.log('IndexDB onSuccess', event);
  };

  // log any errors
  request.onerror = () => {
    console.log('[onerror]', request.error);
  };

  // handle if an upgrade is needed
  request.onupgradeneeded = (event) => {
    const db = event.target.result;
    db.createObjectStore('cache', { keyPath: 'key' });
  };
};

export const setCache = async (key, value) => {
  const request = window.indexedDB.open('APIWrapper', 1);
  return new Promise((resolve) => {
    request.onsuccess = (event) => {
      // create transaction from database
      const db = event.target.result;
      const transaction = db.transaction('cache', 'readwrite');

      // get store from transaction
      const dataStore = transaction.objectStore('cache');

      // update the value for the key
      const addKey = dataStore.put({ key, value });
      addKey.onsuccess = () => resolve(true);
      addKey.onerror = () => resolve(false);
    };
    request.onerror = () => resolve(false);
  });
};
export const getCache = async (key) => {
  const request = window.indexedDB.open('APIWrapper', 1);
  return new Promise((resolve, reject) => {
    request.onsuccess = (event) => {
      // create transaction from database
      const db = event.target.result;
      const transaction = db.transaction('cache', 'readwrite');

      // get store from transaction
      const dataStore = transaction.objectStore('cache');

      // update the value for the id
      const keyValue = dataStore.get(key);
      keyValue.onsuccess = () => {
        console.log('keyValue.result', keyValue.result);
        return keyValue.result ? resolve(keyValue.result.value) : reject(new Error('not_found'));
      };
      keyValue.onerror = () => {
        console.log('Not found');
        return reject(new Error('not_found'));
      };
    };
  });
};
export const deleteCache = async (key) => {
  const request = window.indexedDB.open('APIWrapper', 1);
  return new Promise((resolve) => {
    request.onsuccess = (event) => {
      // create transaction from database
      const db = event.target.result;
      const transaction = db.transaction('cache', 'readwrite');

      // get store from transaction
      const dataStore = transaction.objectStore('cache');

      // update the value for the id
      const keyValue = dataStore.delete(key);
      keyValue.onsuccess = () => {
        resolve(true)
      };
      keyValue.onerror = () => {
        resolve(false)
      };
    };
  });
};
