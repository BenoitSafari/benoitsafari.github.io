import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { aura } from './CodeBlock.AuraTheme';
import { ReactComponent as SvgClipboard } from '@svg/ico_clipboard.svg';
import styles from './CodeBlock.module.scss';

function CodeBlock ({children}) {
  const toClipboard = (e) => {
    const target = e.target.parentNode.children[2].textContent;
    console.log(target);
    navigator.clipboard.writeText(target);
  };
  return(
    <div className={styles['code-block']}>
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
    </div>
  );
}

export default CodeBlock;