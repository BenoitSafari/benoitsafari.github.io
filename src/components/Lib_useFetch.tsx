import React from 'react';
import useFetch from 'lib/useFetch';
import { Container, H3, Usage, State } from './GlobalStyle';
import { InputText, Button } from 'lib/Inputs';
import Loader from './Loader';
import CodeBlock from './CodeBlock';

function LibInputs () {
  const [inputText, setInputText] = React.useState('Pikachu');
  const [query, setsetQuery]      = React.useState('pikachu');
  const {data, error, loading}    = useFetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
  const handleSearch = () => {setsetQuery(inputText);};
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
          {data?.name && <span>{data.name}</span>}
          <div style={{marginTop: '.5rem'}}>error:&nbsp;{(error) ? <span style={{color: 'red'}}>{String(error)}</span> : <span>null</span> }</div>
          <div style={{marginTop: '.5rem'}}>loading:&nbsp;{(loading) ? <span style={{color: 'green'}}>true</span> : <span>false</span> }</div>
        </State>
        <details>
          <Usage>Usage</Usage>
          <CodeBlock>
            {codeTest[0]}
          </CodeBlock>
        </details>
      </Container>

    </>
  );
}

const codeTest = [``];

export default LibInputs;