import React from 'react';
import { Button, InputText, InputCheckbox } from 'lib/Inputs';
import Layout from 'components/Layout';
import 'styles/reset.css';
import 'styles/globals.css';

function App() {
  const [inputText, setInputText] = React.useState('');
  const [inputCheckbox, setInputCheckbox] = React.useState(true);

  return(
    <Layout>
      <div style={{width: 'fit-content', margin: '2rem auto', display: 'flex', flexDirection: 'column'}}>
        {/* COMPONENT: Button */}
        <h2 style={{margin: '1rem 0 1rem', fontSize: '1.2rem'}}>
          Button component
        </h2>
        <Button>Valider</Button>


        {/* COMPONENT: InputText */}
        <h2 style={{margin: '3rem 0 1rem', fontSize: '1.2rem'}}>
        InputText component
        </h2>
        <InputText
          onChange={(e)=>{setInputText(e.target.value);}}
          label={'Email'}
          name={'mail'}
          value={inputText}
          placeholder={'jambon@gmail.com'}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
          </svg>
        </InputText>
      

        {/* COMPONENT: InputCheckbox */}
        <h2 style={{margin: '3rem 0 1rem', fontSize: '1.2rem'}}>
          InputCheckbox component
        </h2>
        <InputCheckbox
          onChange={(e) => {setInputCheckbox(e.target.checked);}}
          isChecked={inputCheckbox}
          name='newsletter'
        >I want to receive a 100 newsletter mails per day
        </InputCheckbox>
        <div>State: {String(inputCheckbox)}</div>
      </div>
    </Layout>
  );}

export default App;