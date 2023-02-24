import React from "react";
import useFetchQuery from "../../common/useFetchQuery";

export default function Articles() {
  const { data, isLoading, hasErrors } = useFetchQuery<any[]>('articles', [], '/api/articles', { method: 'get' });

  if (isLoading) return <h4>...Loading</h4>;

  if (hasErrors) return <h4>Errors</h4>;

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
