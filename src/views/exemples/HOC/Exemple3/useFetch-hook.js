// https://medium.com/@zaingz/how-react-hooks-compares-to-redux-eba43788df46
import { useState, useEffect } from 'react';
import axios, { CancelToken } from 'axios';

export default function useFetch(options) {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const source = CancelToken.source();
    (async () => {
      setIsLoading(true)
      try {
        const response = await axios({ ...options, ...{ cancelToken: source.token } })
        setData(response)
        setIsLoading(false)
      } catch (e) {
        if (axios.isCancel(e)) {
          return
        }
        setIsLoading(false)
        setError(e)
        setData(null)
      }
    })()

    return () => source.cancel('useFetch cancelled')
  }, [options.url, options.method])

  return { data, isLoading, error }
}
