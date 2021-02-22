import axios from 'axios';
import stringHash from 'string-hash';
import { setCache, getCache } from './indexedDB';
import store from '../store';

let headers;

let useAxios = (localStorage.getItem('useAxios') === 'true') // ? localStorage.getItem('useAxios') : true

const aia = {
  get: async (url, params) => {
    let result; let hasToCached; let wrappedResult

    store.dispatch({ type: 'query_start', payload: { } })

    console.log("useAxios dans get", useAxios);
    if (useAxios) {
      result = await axios.get(`https://diaas-dev.gtaia-test-domain.net/std-dev-lux-13100/${url}`, headers);

      wrappedResult = {
        data: result.data,
        status: result.status,
        statusText: result.statusText
      };
      console.log('result from axios', wrappedResult);
      store.dispatch({ type: 'query_end', payload: { success: true } })
      hasToCached = true;
    } else {
      wrappedResult = await aia.getFromCache('GET', url, params);
      console.log('result from cache', wrappedResult);
      hasToCached = false;
    }
    if (hasToCached) {
      aia.saveToCache('GET', url, params, wrappedResult);
    }

    return wrappedResult;
  },
  getFromCache: (method, urlToCall, params) => {
    const { key } = aia.getCacheFileInfo(method, urlToCall, params);
    return new Promise((resolve) => {
      getCache(key)
        .then((result) => {
          store.dispatch({ type: 'query_end', payload: { success: true } })
          resolve(result.wrappedResult);
        })
        .catch(() => {
          store.dispatch({ type: 'query_end', payload: { error: true } })
          resolve({});
        });
    });
  },
  saveToCache: (method, urlToCall, params, wrappedResult) => {
    const { key } = aia.getCacheFileInfo(method, urlToCall, params);

    const event = new Date(Date.now());
    const dateTime = event.toLocaleString('fr-FR', { timeZone: 'UTC' });
    const contains = {
      urlToCall,
      params,
      date: dateTime,
      wrappedResult
    };
    setCache(key, contains);
  },

  getCacheFileInfo: (method, urlToCall, params) => {
    const key = method + stringHash(method + urlToCall + JSON.stringify(params));
    return { key };
  },

  useAxios(value) {
    useAxios = value
    localStorage.setItem('useAxios', value)
  },

  setHeader(newHeader) {
    headers = newHeader
  }

};

export default aia;
