import { useState, useEffect } from 'react';

function useFetch (url: string) {
  const [data, setData]       = useState<any>(null);
  const [error, setError]     = useState<unknown | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      setData(null);
      setError(null);
      setLoading(true);
      try {
        const res = await fetch(url);
        if (res.ok) {
          const data = await res.json();
          setData(data);
        } else {
          // Create error message
          throw Error(`${res.status} ${res.statusText}`);
        }
      } catch(err) {
        // Deal with your error
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);
  return {data, error, loading};
}

export default useFetch;