import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CodeBlock from '@components/CodeBlock';

function Art3 () {
  return(
    <>
      <p style={{margin: '2rem 0'}}>Dans cette article nous allons consommer une api à l'aide d'un <em>hook custom</em>.</p>
      <h2>useFetch</h2>
      <CodeBlock>
        {codeBlocks[0]}
      </CodeBlock>
      <h2>Utilisation</h2>
      <CodeBlock>
        {codeBlocks[1]}
      </CodeBlock>
      <section className='articles-layout__content__links'>
        <a target='_blank' rel='noreferrer' href='https://benoitsafari.github.io/'>Voir la doc</a>
        <Link to='/index'>Retourner à l'index</Link>
      </section>
    </>
  );
}

function Art3EN () {
  return(
    <>
      <p style={{margin: '2rem 0'}}>In this article we're going to create a <em>custom hook</em> to fetch an api.</p>
      <h2>useFetch</h2>
      <CodeBlock>
        {codeBlocks[2]}
      </CodeBlock>
      <h2>Usage</h2>
      <CodeBlock>
        {codeBlocks[3]}
      </CodeBlock>
      <section className='articles-layout__content__links'>
        <a target='_blank' rel='noreferrer' href='https://benoitsafari.github.io/'>See documentation</a>
        <Link to='/index'>Go back</Link>
      </section>
    </>
  );
}

const codeBlocks =[`~~~jsx
import { useState, useEffect } from 'react';

function useFetch(url, init) {
  // Init states
  // data    - contient le retour du fetch formaté en JSON
  // error   - contient le message d'erreur
  // loading - contient un boolean
  const [data, setData]       = useState(null);
  const [error, setError]     = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      // Réinitialise les states
      setData(null);
      setError(null);
      setLoading(true);

      try {
        // Fetch l'url avec le 'request init object' (optionnel)
        // Voir https://developer.mozilla.org/fr/docs/Web/API/fetch pour plus de details
        const res = await fetch(url, init);
        if (res.ok) {
          // Si la réponse ne renvoi pas d'erreur
          const data = await res.json();
          setData(data);
        } else {
          // Sinon on créé notre erreur
          throw Error(\`\${res.status} \${res.statusText}\`);
        }

      } catch(err) {
        // Qu'on traite ici
        setError(err);

      } finally {
        // On repasse le 'Loading' en false
        setLoading(false);
      }

    })();

  }, [url, init]);
  
  return {data, error, loading};
}

export default useFetch;
`,
`~~~jsx
import React from 'react';
import useFetch from '...chemin-vers-useFetch';

function MyComponent () {
  // Optionnel
  const requestInit = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({someData: 'Lol'})
  }
  // On appel le hook
  const {data, error, loading} = useFetch('https://url-to-fetch', requestInit);

  return(
    <>
      {loading && <div>Please wait</div>}
      {data && <div>{data.someStuff}</div>}
    </>
  )}
`,
`~~~jsx
import { useState, useEffect } from 'react';

function useFetch(url, init) {
  // Init states
  // data    - contain transformed response from fetch
  // error   - contain error message
  // loading - contain boolean
  const [data, setData]       = useState(null);
  const [error, setError]     = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      // Reset states
      setData(null);
      setError(null);
      setLoading(true);

      try {
        // Fetch url with optional request init object
        // See https://developer.mozilla.org/en-US/docs/Web/API/fetch for more details
        const res = await fetch(url, init);
        if (res.ok) {
          // If success transform response
          const data = await res.json();
          setData(data);
        } else {
          // Create error message
          throw Error(\`\${res.status} \${res.statusText}\`);
        }

      } catch(err) {
        // Deal with error
        setError(err);

      } finally {
        // Set Loading state to false
        setLoading(false);
      }

    })();

  }, [url, init]);
  
  return {data, error, loading};
}

export default useFetch;
`,
`~~~jsx
import React from 'react';
import useFetch from '...path-to-useFetch';

function MyComponent () {
  // Optional
  const requestInit = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({someData: 'Lol'})
  }
  // Hook call
  const {data, error, loading} = useFetch('https://url-to-fetch', requestInit);

  return(
    <>
      {loading && <div>Please wait</div>}
      {data && <div>{data.someStuff}</div>}
    </>
  )}
`,
];

export { Art3, Art3EN };