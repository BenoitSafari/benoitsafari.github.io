import { useState, useEffect } from 'react';

function useFetch (url: string) {
  const [data, setData]       = useState<any>(null);
  const [error, setError]     = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      const res = await fetch(url);
      const data = await res.json();
      try {
        setData(data);
        setLoading(false);
      } catch {
        setError(e => error);
        setLoading(false);
      }
    })();
  }, [url]);
  return {data, error, loading};
}

export default useFetch;