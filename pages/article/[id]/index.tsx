import Link from 'next/link';
import { useRouter } from 'next/router';



const Article = ({article}: any) => {
  const router = useRouter();
  const {id} = router.query;
  
  
  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br/>
      <Link href="/"> Go Back</Link>
    </>
  )
}

export const getStaticProps = async (context: any) => {
  const res: any = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`, {method: "GET"});
  const article: string | {} = await res.json();
  
  return {
    props: {
      article
    }
  }
}

export const getStaticPaths = async () => {
  const res: any = await fetch(`https://jsonplaceholder.typicode.com/posts`, {method: "GET"});
  const articles: [any] | [] = await res.json();

  const ids: any[] | any = articles.map((article: any) => article.id)
  const paths: string | number = ids.map((id: string | number) => ({
    params: {
      id: id.toString()
    }
  }))

  return {
    paths,
    fallback: false
  }
}
 
export default Article;