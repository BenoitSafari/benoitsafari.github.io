import { Summary, Title } from 'components/GlobalStyle';
import Layout from 'components/Layout';
import LibInputs from 'components/Lib_Inputs';
import useFetch from 'lib/useFetch';
import { useEffect } from 'react';

function App() {
  const { data, error, loading } = useFetch('https://pokeapi.co/api/v2/pokemon/pikachu');
  useEffect(() => {
    data && console.log(data);
    error && console.log(error);
  });
  return(
    <Layout>
      <Title>
        <div>Benoitsafari's</div>
        <div>React Lib'</div>
      </Title>
      {loading && <p>Loading...</p>}
      {!loading && data && <p>Done!</p>}
      <ul>
        <li>
          <details>
            <Summary>Inputs Library</Summary>
            <LibInputs/>
          </details>  
        </li>
      </ul>
    </Layout>
  );}

export default App;