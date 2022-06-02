import stylesArticle from "../styles/Article.module.css";
import ArticleItem from './ArticleItem';


const ArticleList = ({articles}: any) => {
  return (
    <div className={stylesArticle.grid}>
      {articles.map((article: {} | any ) => (        
        <ArticleItem key={article.id} article={article}/>
      ))}
    </div>
  )
}

 
export default ArticleList;