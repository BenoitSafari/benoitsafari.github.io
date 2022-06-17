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
export const Title = styled.h1`
  font-family: 'Allison', cursive;
  font-size: 8rem;
  transform: rotate(-4deg);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;
  @media screen and (max-width: 580px) {
    font-size: 6rem;
  }
  @media screen and (max-width: 380px) {
    font-size: 4rem;
  }
`;
export const Summary = styled.summary`
  font-size: 1.7rem;
  font-weight: 600;
  margin-bottom: 2.5rem;
  @media screen and (max-width: 580px) {
    font-size: 1.3rem;
  }
`;
export const H2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2.5rem;
  @media screen and (max-width: 580px) {
    font-size: 1.3rem;
  }
`;
export const H3 = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  @media screen and (max-width: 580px) {
    font-size: 1.1rem;
  }
`;
export const Usage = styled.summary`
  font-size: 1.2rem;
  margin: 2.5rem 0;
  @media screen and (max-width: 580px) {
    font-size: 1.1rem;
  }
`;
export const State = styled.div`
  font-size: .9rem;
  font-style: italic;
  margin-top: 2rem;
  & span {
    margin-left: .5rem;
  }
`;