import React from 'react';
import { ReactComponent as SvgMail } from 'assets/ico_mail.svg';
import { Button, InputToggle, InputText, InputCheckbox, InputRadio, InputRange, InputDoubleRange } from 'lib/Inputs';
import { Container, H3, State } from './GlobalStyle';
import CodeBlock from './CodeBlock';

function LibInputs () {
  const [inputToggle, setInputToggle]                 = React.useState(false);
  const [inputText, setInputText]                     = React.useState('');
  const [inputCheckbox, setInputCheckbox]             = React.useState(true);
  const [inputRadio, setInputRadio]                   = React.useState('jambon');
  const [inputRange, setInputRange]                   = React.useState(0);
  const [inputDoubleRangeMin, setInputDoubleRangeMin] = React.useState(-400);
  const [inputDoubleRangeMax, setInputDoubleRangeMax] = React.useState(400);

  const codeTest = `~~~jsx
  const jambon = true;
  ~~~`;

  return(
    <>
      {/* COMPONENT: Button */}
      <Container>
        <H3>Button</H3>
        <Button>OK</Button>
        {/* <CodeBlock>
          {codeTest}
        </CodeBlock> */}
      </Container>

      {/* COMPONENT: InputToggle */}
      <Container>
        <H3>InputToggle</H3>
        <InputToggle
          state={inputToggle}
          setter={setInputToggle}
          valueTrue={'Off'}
          valueFalse={'On'}
        />
        <State>State:
          {inputToggle && <span style={{color: 'green'}}>{String(inputToggle)}</span>}
          {!inputToggle && <span style={{color: 'red'}}>{String(inputToggle)}</span>}
        </State>
      </Container>

      {/* COMPONENT: InputText */}
      <Container>
        <H3>InputText</H3>
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
        <H3>InputCheckbox</H3>
        <InputCheckbox
          setter={setInputCheckbox}
          state={inputCheckbox}
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
        <H3>InputCheckbox</H3>
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
        <State>State:<span>' {inputRadio} '</span></State>
      </Container>

      {/* COMPONENT: InputRange */}
      <Container>
        <H3>InputRange</H3>
        <InputRange
          minValue={-400}
          maxValue={400}
          stateValue={inputRange}
          setter={setInputRange}
        />
        <State>State:<span>{inputRange}</span></State>
      </Container>

      {/* COMPONENT: InputDoubleRange */}
      <Container>
        <H3>InputDoubleRange</H3>
        <InputDoubleRange
          baseValueMin={-400}
          baseValueMax={400}
          stateValueMin={inputDoubleRangeMin}
          stateValueMax={inputDoubleRangeMax}
          minValueSetter={setInputDoubleRangeMin}
          maxValueSetter={setInputDoubleRangeMax}
        />
        <State>State:<span>[Min] {inputDoubleRangeMin} [Max] {inputDoubleRangeMax}</span></State>
      </Container>
    </>
  );
}

export default LibInputs;