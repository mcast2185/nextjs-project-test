import ArticleList from '../components/ArticleList';
import styles from '../styles/Layout.module.css'
import article from './article/[id]';



const Home= ({articles}: any) => {

  return (
    <div className={styles.container}>
      <h2>Home</h2>
      <ArticleList key={articles.id} articles={articles}/>
    </div>
  )
}

export const getStaticProps: {} = async () => {
  const res: any = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`, {method: "GET"});
  const articles: string | [string] = await res.json();

  return {
    props: {
      articles
    }
  }
}

export default Home;