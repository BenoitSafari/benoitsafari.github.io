import React from 'react';
import styled from 'styled-components';
import { ReactComponent as SvgMail } from 'assets/ico_mail.svg';
import { Button, InputText, InputCheckbox, InputRadio } from 'lib/Inputs';
import Layout from 'components/Layout';

const Container = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 4px;
  background-color: var(--background-secondary-color);
`;
const H1 = styled.h1`
  font-size: 1.7rem;
  font-weight: 600;
  text-decoration: underline;
  margin-bottom: 2.5rem;
`;
const H2 = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
`;
const State = styled.div`
  font-size: .9rem;
  font-style: italic;
  margin-top: 2rem;
  & span {
    margin-left: .5rem;
  }
`;

function App() {
  const [inputText, setInputText]           = React.useState('');
  const [inputCheckbox, setInputCheckbox]   = React.useState(true);
  const [inputRadio, setInputRadio]         = React.useState('jambon');

  return(
    <Layout>
      <H1>Lib Inputs</H1>
      {/* COMPONENT: Button */}
      <Container>
        <H2>Button</H2>
        <Button>OK</Button>
      </Container>

      {/* COMPONENT: InputText */}
      <Container>
        <H2>InputText</H2>
        <InputText
          setter={setInputText}
          label={'Email'}
          name={'mail'}
          value={inputText}
          placeholder={'jambon@gmail.com'}
        >
          <SvgMail/>
        </InputText>
        <State >State:<span>{inputText}</span>
        </State>
      </Container>
    
      {/* COMPONENT: InputCheckbox */}
      <Container>
        <H2>InputCheckbox</H2>
        <InputCheckbox
          setter={setInputCheckbox}
          isChecked={inputCheckbox}
          name='newsletter'
        >
          Yes! Send me a 100 newsletter mails per day
        </InputCheckbox>
        <State>State:
          {inputCheckbox && <span style={{color: 'green'}}>{String(inputCheckbox)}</span>}
          {!inputCheckbox && <span style={{color: 'red'}}>{String(inputCheckbox)}</span>}
        </State>
      </Container>

      {/* COMPONENT: InputRadio */}
      <Container>
        <H2>InputCheckbox</H2>
        <InputRadio
          field={'radio-test'}
          value='jambon'
          state={inputRadio}
          setter={setInputRadio}
        >
          Jambon
        </InputRadio>
        <InputRadio
          field={'radio-test'}
          value='pathe'
          state={inputRadio}
          setter={setInputRadio}
        >
          Pathé
        </InputRadio>
        <State>State:<span>" {inputRadio} "</span></State>
      </Container>
    </Layout>
  );}

export default App;