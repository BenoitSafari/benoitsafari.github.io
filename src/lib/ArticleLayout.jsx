import './ArticleLayout.scss';

function ArticleLayout({ children, title }) {
  return(
    <section className='article'>
      <h1>{ title }</h1>
      { children }
    </section>
  );
}

export default ArticleLayout;