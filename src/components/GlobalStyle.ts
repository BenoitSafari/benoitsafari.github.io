import {createGlobalStyle} from 'styled-components';
import styled from 'styled-components';

export default createGlobalStyle`
  // RESET
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, 
  a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, 
  samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, 
  li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, 
  article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary, time, mark, audio, video {
    margin: 0; padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section { 
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote::before, blockquote::after, q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* Custom */
  html {
    box-sizing: border-box;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }
  a, del, ins {
    text-decoration: none;
  }
  a {
    color: inherit;
  }
  input, button {
    all: unset;
    outline: 0;
  }

  // GLOBAL STYLE
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

  :root {
    --background-color:             #1b1b1b;
    --background-secondary-color:   #282828;
    --text-color:                   #d4d4d4;
  }

  * { 
    box-sizing: border-box; 
  }

  body {
    background-color: var(--background-color);
    color: var(--text-color);
    font-family: 'Lato', sans-serif;
  }
`;

export const Container = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 4px;
  background-color: var(--background-secondary-color);
`;
export const H2 = styled.h2`
  font-size: 1.7rem;
  font-weight: 600;
  text-decoration: underline;
  margin-bottom: 2.5rem;
`;
export const H3 = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
`;
export const State = styled.div`
  font-size: .9rem;
  font-style: italic;
  margin-top: 2rem;
  & span {
    margin-left: .5rem;
  }
`;