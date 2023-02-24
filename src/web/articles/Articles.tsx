import React from "react";
import useFetchQuery from "../../common/hooks/useFetchQuery";
import { Article } from "./models/article";

export default function Articles() {
  const { data, loading, error } = useFetchQuery<Article[]>('articles', [], '/api/articles', { method: 'get' });

  if (loading) return <h4>...Loading</h4>;

  if (error) return <h4>Errors</h4>;

  return (
    <div>
      <h1>Articles</h1>
      <ul>
        {data?.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </div>
  );
}
