import {
  initCache, setCache, getCache, deleteCache
} from './indexedDB';
// Testing with JEST is done in node, so we have no Browser and no IndexedDB.
// We use a fake-indexeddb which has the same comportement as the real one.
require('fake-indexeddb/auto');

const key = `TST${Date.now()}`;
const value = { a: 1, b: 2, c: { d: 3, e: 4 } };

describe('indexedDB', () => {
  beforeAll(() => initCache());

  it('get in cache on missing key', async () => {
    await getCache(key)
      .catch((res) => {
        // console.log('Result', res);
        expect(res.message)
          .toEqual('not_found');
      });
  });

  it('put in cache', async () => {
    await setCache(key, value)
      .then((res) => expect(res).toBeTruthy());
  });

  it('get in cache', async () => {
    await getCache(key)
      .then((res) => {
        // console.log('Result', res);
        expect(res).toEqual(value);
      });
  });

  it('delete in cache', async () => {
    await deleteCache(key);
    await getCache(key)
      .catch((res) => {
        // console.log('Erreur : ', JSON.stringify(res));
        expect(res.message)
          .toEqual('not_found');
      });
  });
});
