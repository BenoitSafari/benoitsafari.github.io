import { Summary, Title } from 'components/GlobalStyle';
import Layout from 'components/Layout';
import LibInputs from 'components/Lib_Inputs';

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
        </li>
      </ul>
    </Layout>
  );}

export default App;