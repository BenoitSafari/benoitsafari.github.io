import { useState, useEffect } from 'react';

/**
 * @param {string}      url   url to fetch
 * @param {RequestInit} init  request init object
 */
function useFetch(url: string, init?: RequestInit) {
  const [data, setData]       = useState<any>(null);
  const [error, setError]     = useState<unknown | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      // Reset states
      setData(null);
      setError(null);
      setLoading(true);

      try {
        const res = await fetch(url, init);
        if (res.ok) {
          // Success
          const data = await res.json();
          setData(data);
        } else {
          // Error
          throw Error(`${res.status} ${res.statusText}`);
        }

      } catch(err) {
        // Deal with error
        setError(err);

      } finally {
        setLoading(false);
      }

    })();

  }, [url, init]);
  
  return {data, error, loading};
}

export default useFetch;