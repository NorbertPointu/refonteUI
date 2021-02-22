/* eslint-disable */
/*

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockAxios from 'jest-mock-axios';
import aia from './aia';
import * as indexedDB from './indexedDB';
// Testing with JEST is done in node, so we have no Browser and no IndexedDB.
// We use a fake-indexeddb which has the same comportement as the real one.
require('fake-indexeddb/auto');

// eslint-disable-next-line no-unused-vars
const header = {
  headers: {
    'x-api-key': '123456',
    Accept: 'application/vnd.hal+json',
    'x-auth-username': 'UserTST',
    'Content-Type': 'application/json'
  }
};
const url = 'fakeURI';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('../store/AIAWrapper', () => console.log('ICI et La'));
store.mockImplementation(() => console.log('initializeStore called'));

jest.mock('./indexedDB');

describe('indexedDB', () => {
  afterEach(() => {
    // cleaning up the mess left behind the previous test
    mockAxios.reset();
  });

  it('shoud get url using Axios', () => {
    // eslint-disable-next-line no-unused-vars,no-shadow
    const store = mockStore({
      useAxios: true, count: 0, countSuccess: 0, countError: 0
    });

    indexedDB.setCache.mockResolvedValue(true);
    console.log("j'appelle");
    aia.get(url);
    // expect(mockAxios).toHaveBeenCalledWith(url, {})
    expect(mockAxios).toHaveBeenCalledTimes(1);
  });

  /!* it('shoud set the header', () => {
    aia.setHeader(header)
    mockAxios.onGet("mymockedgapi").reply(200, {
      users: [{ id: 1, name: "John Smith" }],
    });
    aia.get(url, {})
  }) *!/
});
*/
