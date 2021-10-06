import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataByKey, selectXxx } from './store/xxxSlice';

type one = {
  "id": number,
  "name"?: string,
  "director"?: string,
  "rating"?: number,
}

const Xxxxx = () => {
  const posts = useSelector(selectXxx);

  const dispatch = useDispatch();
  useEffect(
    () => { dispatch(getDataByKey({ key: 'movies' })) },
    [dispatch]
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

export default Xxxxx;


//      {
//        posts && posts !== {} && posts.map((item: one) => {
//          return (<div key={item.name}>{item.name}</div>);
//        })
//      }

