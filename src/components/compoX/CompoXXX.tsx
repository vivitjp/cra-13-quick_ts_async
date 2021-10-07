import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataByKey, selectPosts } from './store/sliceA';

type Props = {
  keyword: string
}

type one = {
  "id": number,
  "name"?: string,
  "address"?: string,
  "age"?: number,
}

const CompoXXX = ({ keyword }: Props) => {
  const posts = useSelector(selectPosts);

  const dispatch = useDispatch();
  useEffect(
    () => { dispatch(getDataByKey({ keyword })) },
    [dispatch, keyword]
  );

  return (
    <>
      {
        posts && Object.keys(posts).length > 0 && posts.map((item: one) => {
          return (<div key={item.name}>{item.name}</div>);
        })
      }
    </>
  );
}

export default CompoXXX;