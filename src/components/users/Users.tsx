import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getDataByKey, selectPosts } from '../../stores/user/slice';

import Avatar from '@mui/material/Avatar';

type one = {
  "id": number,
  "name"?: string,
  "address"?: string,
  "age"?: number,
  "en": string,
}

const Users = () => {
  const posts = useSelector(selectPosts);

  const dispatch = useDispatch();
  useEffect(
    () => { dispatch(getDataByKey()) },
    [dispatch]
  );

  return (
    <>
      {
        posts && Object.keys(posts).length > 0 && posts.map((item: one) => {
          return (
            <Avatar alt={item.name}
              src={`./images/${item.en}.jpg`}
              sx={{ width: 60, height: 60, margin: 1 }} />
          )
        })
      }
    </>
  )
}

export default Users;