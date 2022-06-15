import React from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as SvgMail } from 'assets/ico_mail.svg';
import { Button, InputText, InputCheckbox } from 'lib/Inputs';
import Layout from 'components/Layout';

const Container = styled.div`
    width: fit-content;
    margin: 2rem auto;
    display: flex; 
    flex-direction: column;
    `;
const H2 = styled.h2<{first?: boolean}>`
  margin: 3rem 0 1rem;
  font-size: 1.2rem;
  ${props => props.first && css`
    margin-top: 1rem;
  `}
`;
const State = styled.div`
  font-size: .9rem;
  font-style: italic;
  margin-top: .4rem;
  & span {
    margin-left: .5rem;
  }
`;

function App() {
  const [inputText, setInputText] = React.useState('');
  const [inputCheckbox, setInputCheckbox] = React.useState(true);

  return(
    <Layout>
      <Container>
        {/* COMPONENT: Button */}
        <H2 first>Button component</H2>
        <Button>Valider</Button>


        {/* COMPONENT: InputText */}
        <H2>InputText component</H2>
        <InputText
          onChange={(e)=>{setInputText(e.target.value);}}
          label={'Email'}
          name={'mail'}
          value={inputText}
          placeholder={'jambon@gmail.com'}
        >
          <SvgMail/>
        </InputText>
        <State >State:<span>{inputText}</span>
        </State>
      

        {/* COMPONENT: InputCheckbox */}
        <H2>InputCheckbox component</H2>
        <InputCheckbox
          onChange={(e) => {setInputCheckbox(e.target.checked);}}
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
    </Layout>
  );}

export default App;