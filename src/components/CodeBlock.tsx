import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { ReactComponent as SvgClipboard } from 'assets/ico_clipboard.svg';

const Block = styled.div`
position: relative;
& button {
  width: 24px; height: 24px;
  position: absolute;
  z-index: 2;
  top: 1rem; right: 1rem;
  cursor: pointer;
  @media screen and (max-width: 580px) {
    display: none;
  }}
  & svg {
    position: absolute;
    z-index: 1;
    top: 1rem; right: 1rem;
    @media screen and (max-width: 580px) {
      display: none;
  }}
& pre {
  & div {
    background-color: #3d3d3d!important;
    box-shadow: 2px 2px 4px rgba(0,0,0,0.35);
    -webkit-box-shadow: 2px 2px 4px rgba(0,0,0,0.35);
    padding: 1rem!important;
    border-radius: 5px;
    & code {
      font-family: 'Source Code Pro', monospace;
    }}}
`;

// TODO: Correct Types needed
type CodeBlockProps = {
  children: string
}

function CodeBlock ({children}: CodeBlockProps) {
  const toClipboard = (e: any) => {
    const target = e.target.parentNode.children[2].textContent;
    navigator.clipboard.writeText(target);
  };
  return(
    <Block>
      <button onClick={toClipboard}></button>
      <SvgClipboard/>
      <ReactMarkdown
        children={children}
        components={{
          code({node, inline, className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                style={aura}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          }
        }}
      />
    </Block>
  );
}

const aura: any = {
  'code[class*="language-"]': {
    'color': '#edecee',
    'direction': 'ltr',
    'textAlign': 'left',
    'whiteSpace': 'pre',
    'wordSpacing': 'normal',
    'wordBreak': 'normal',
    'lineHeight': '1.5',
    'MozTabSize': '4',
    'OTabSize': '4',
    'tabSize': '4',
    'WebkitHyphens': 'none',
    'MozHyphens': 'none',
    'msHyphens': 'none',
    'hyphens': 'none'
  },
  'pre[class*="language-"]': {
    'color': '#edecee',
    'direction': 'ltr',
    'textAlign': 'left',
    'whiteSpace': 'pre',
    'wordSpacing': 'normal',
    'wordBreak': 'normal',
    'lineHeight': '1.5',
    'MozTabSize': '4',
    'OTabSize': '4',
    'tabSize': '4',
    'WebkitHyphens': 'none',
    'MozHyphens': 'none',
    'msHyphens': 'none',
    'hyphens': 'none',
    'padding': '1em',
    'margin': '.5em 0',
    'overflow': 'auto',
    'background': '#2b2b2b'
  },
  'pre[class*="language-"]::-moz-selection': {
    'color': 'inherit',
    'background': 'rgba(33, 66, 131, .85)'
  },
  'pre[class*="language-"] ::-moz-selection': {
    'color': 'inherit',
    'background': 'rgba(33, 66, 131, .85)'
  },
  'code[class*="language-"]::-moz-selection': {
    'color': 'inherit',
    'background': 'rgba(33, 66, 131, .85)'
  },
  'code[class*="language-"] ::-moz-selection': {
    'color': 'inherit',
    'background': 'rgba(33, 66, 131, .85)'
  },
  'pre[class*="language-"]::selection': {
    'color': 'inherit',
    'background': 'rgba(33, 66, 131, .85)'
  },
  'pre[class*="language-"] ::selection': {
    'color': 'inherit',
    'background': 'rgba(33, 66, 131, .85)'
  },
  'code[class*="language-"]::selection': {
    'color': 'inherit',
    'background': 'rgba(33, 66, 131, .85)'
  },
  'code[class*="language-"] ::selection': {
    'color': 'inherit',
    'background': 'rgba(33, 66, 131, .85)'
  },
  ':not(pre) > code[class*="language-"]': {
    'background': '#2b2b2b',
    'padding': '.1em',
    'borderRadius': '.3em'
  },
  'comment': {
    'color': '#adadad'
  },
  'prolog': {
    'color': '#adadad'
  },
  'cdata': {
    'color': '#adadad'
  },
  'delimiter': {
    'color': '#edecee'
  },
  'boolean': {
    'color': '#edecee'
  },
  'keyword': {
    'color': '#9769f3'
  },
  'selector': {
    'color': '#edecee'
  },
  'important': {
    'color': '#edecee'
  },
  'atrule': {
    'color': '#edecee'
  },
  'operator': {
    'color': '#9769f3'
  },
  'punctuation': {
    'color': '#edecee'
  },
  'attr-name': {
    'color': '#dd6bd7'
  },
  'tag': {
    'color': '#9769f3'
  },
  'tag.punctuation': {
    'color': '#edecee'
  },
  'doctype': {
    'color': '#e8bf6a'
  },
  'builtin': {
    'color': '#e8bf6a'
  },
  'entity': {
    'color': '#6897bb'
  },
  'number': {
    'color': '#4beb80'
  },
  'symbol': {
    'color': '#6897bb'
  },
  'property': {
    'color': '#9876aa'
  },
  'constant': {
    'color': '#9876aa'
  },
  'variable': {
    'color': '#9769f3'
  },
  'string': {
    'color': '#4beb80'
  },
  'char': {
    'color': '#6a8759'
  },
  'attr-value': {
    'color': '#4beb80'
  },
  'attr-value.punctuation': {
    'color': '#4beb80'
  },
  'attr-value.punctuation:first-child': {
    'color': '#a9b7c6'
  },
  'url': {
    'color': '#287bde',
    'textDecoration': 'underline'
  },
  'function': {
    'color': '#fab74c'
  },
  'regex': {
    'background': '#364135'
  },
  'bold': {
    'fontWeight': 'bold'
  },
  'italic': {
    'fontStyle': 'italic'
  },
  'inserted': {
    'background': '#294436'
  },
  'deleted': {
    'background': '#484a4a'
  },
  'code.language-css .token.property': {
    'color': '#a9b7c6'
  },
  'code.language-css .token.property + .token.punctuation': {
    'color': '#a9b7c6'
  },
  'code.language-css .token.id': {
    'color': '#ffc66d'
  },
  'code.language-css .token.selector > .token.class': {
    'color': '#ffc66d'
  },
  'code.language-css .token.selector > .token.attribute': {
    'color': '#ffc66d'
  },
  'code.language-css .token.selector > .token.pseudo-class': {
    'color': '#ffc66d'
  },
  'code.language-css .token.selector > .token.pseudo-element': {
    'color': '#ffc66d'
  }
};

export default CodeBlock;