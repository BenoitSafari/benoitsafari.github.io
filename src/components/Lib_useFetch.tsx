import React from 'react';
import useFetch from 'lib/useFetch';
import { Container, H2, H3, Usage, State } from './GlobalStyle';
import { InputText, Button } from 'lib/Inputs';
import Loader from './Loader';
import CodeBlock from './CodeBlock';

function LibInputs () {
  const [inputText, setInputText] = React.useState('Pikachu');
  const [query, setQuery]      = React.useState('pikachu');
  const {data, error, loading}    = useFetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
  const handleSearch = () => {setQuery(inputText.toLowerCase());};
  return(
    <>
      <Container>
        <H3>useFetch</H3>
        <div style={{display: 'flex', alignItems: 'flex-end', gap: '1rem'}}>
          <div>
            <InputText
              setter={setInputText}
              label={'Search a Pokemon'}
              name={'search'}
              value={inputText}
              placeholder={'Pikachu'}
            />
          </div>
          {loading ? <Loader/> : <Button onClick={handleSearch}>Search</Button>}
        </div>
        <State>State: 
          {data?.count && <span>{data.count} results</span>}
          {data?.name && <span>Found n°{data.id} - {data.name}</span>}
          <div style={{marginTop: '.5rem'}}>error:&nbsp;{(error) ? <span style={{color: 'red'}}>{String(error)}</span> : <span>null</span> }</div>
          <div style={{marginTop: '.5rem'}}>loading:&nbsp;{(loading) ? <span style={{color: 'green'}}>true</span> : <span>false</span> }</div>
        </State>
        <details>
          <Usage>Usage</Usage>
          <CodeBlock>
            {codeBlocks[0]}
          </CodeBlock>
        </details>
        <H2>Download Library</H2>
        <details>
          <Usage>useFetch.tsx</Usage>
          <CodeBlock>
            {codeBlocks[1]}
          </CodeBlock>
        </details>
      </Container>
    </>
  );
}

const codeBlocks = [`~~~jsx
import React from 'react';
import useFetch from '...path-to-useFetch';

function MyComponent () {
  const requestInit = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({someData: 'Lol'})
  }
  const {data, error, loading} = useFetch('https://url-to-fetch', requestInit);

  return(
    <>
      {loading && <div>Please wait</div>}
      {data && <div>{data.someStuff}</div>}
    </>
  )}`,
`~~~jsx
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
          throw Error(\`$\{res.status} $\{res.statusText}\`);
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

export default useFetch;`
];

export default LibInputs;