import { Summary, Title } from 'components/GlobalStyle';
import Layout from 'components/Layout';
import LibInputs from 'components/Lib_Inputs';
import LibUseFetch from 'components/Lib_useFetch';

function App() {
  return(
    <Layout>
      <Title>
        <div>Benoitsafari's</div>
        <div>React Lib'</div>
      </Title>
      <ul>
        <li>
          <details>
            <Summary>Inputs Library</Summary>
            <LibInputs/>
          </details>
          <details>
            <Summary>useFetch</Summary>
            <LibUseFetch/>
          </details>
        </li>
      </ul>
    </Layout>
  );}

export default App;