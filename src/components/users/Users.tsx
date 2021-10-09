import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataByKey, selectPosts } from '../../stores/user/slice';

import Avatar from '@mui/material/Avatar';

import './Users.scss'

interface IUser {
  "id": string,
  "name": string,
  "address": string,
  "age": string,
  "en": string,
}

const Users = () => {
  const posts = useSelector(selectPosts);

  const dispatch = useDispatch();
  useEffect(
    () => { dispatch(getDataByKey()) },
    [dispatch]
  );

  const insideAvatarFunction = (user: IUser) => {
    console.log('Avatar Clicked:', user.id, user.en)
  }

  return (
    <div className="list">
      {
        posts && Object.keys(posts).length > 0 && posts.map((item: IUser) => {
          return (
            <div
              key={item.id}
              className="list_item"
              onClick={() => insideAvatarFunction(item)}>

              <Avatar
                alt={item.name}
                src={`${process.env.PUBLIC_URL}/images/${item.en}.jpg`}
                sx={{ width: 60, height: 60 }}
              />
            </div>
          )
        })
      }
    </div>
  )
}

//ランダムに表示するサービス
//avatarUrl="https://joeschmoe.io/api/v1/random" 
//imageUrl="https://picsum.photos/150"

export default Users;