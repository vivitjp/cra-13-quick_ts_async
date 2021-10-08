import React, { useEffect } from 'react';
import Avatar from '@mui/material/Avatar';

import { useDispatch, useSelector } from 'react-redux';
import { getDataByKey, selectPosts } from '../../stores/user/slice';

import './Users.scss'

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

  const insideAvatarFunction = (id: number) => {
    console.log('Avatar Clicked:', id)
  }


  return (
    <div className="list">
      {
        posts && Object.keys(posts).length > 0 && posts.map((item: one) => {
          return (
            <div
              key={item.id}
              className="listitem"
              onClick={() => insideAvatarFunction(item.id)}>
              <Avatar
                alt={item.name}
                src={`./images/${item.en}.jpg`}
                sx={{ width: 60, height: 60 }}
              />
            </div>
          )
        })
      }
    </div>
  )
}

export default Users;