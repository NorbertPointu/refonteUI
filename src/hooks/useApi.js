import axios from 'axios';
import { useEffect, useState } from 'react';

/**
 *
 * @param url
 * @param action
 * @returns {{loaded: boolean, data: object, refresh: (function(): void), loading: boolean, error: undefined}}
 * @public
 *
 */
function useApi({ url, action = 'get' }) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(undefined)
  const [refreshIndex, setRefreshIndex] = useState(0)
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState();
  const refresh = () => setRefreshIndex((old) => old + 1)

  useEffect(() => {
    console.log("Debut", url);
    let cancelled = false;
    setLoading(true);
    setLoaded(false);
    setData(undefined);
    axios[action](url)
      .then((res) => {
        if (!cancelled) {
          setData(res.data);
          setLoading(false)
          setLoaded(true);
        }
      })
      .catch((err) => {
        setLoading(false);
        if (err.response) {
          setError(err.response.data);
        } else {
          setError(err.message);
        }
      });
    return () => {
      cancelled = true;
    };
  }, [url, refreshIndex])

  return {
    data, loading, loaded, error, refresh
  }
}

export default useApi
