import Link from 'next/link';
import stylesArticle from "../styles/Article.module.css";


const ArticleItem = ({article}: any) => {
  return (
    <Link href="/article/[id]" as={`/article/${article.id}`}>
      <a className={stylesArticle.card}>
        <h3>{article.title} &rarr;</h3>
        <p>{article.body}</p>
      </a>
    </Link>
  )
}
 
export default ArticleItem;