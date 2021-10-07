import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getDataByKey, selectPosts } from './store/sliceA';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

// type Props = {
//   keyword: string
// }
const KEY_WORD = 'user';

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
    () => { dispatch(getDataByKey({ keyword: KEY_WORD })) },
    [dispatch]
  );

  return (
    <>
      {
        posts && Object.keys(posts).length > 0 && posts.map((item: one) => {
          return (
            <Card key={item.id} sx={{ margin: 1 }}>
              <CardHeader
                avatar={
                  <Avatar alt={item.name}
                    src={`./images/${item.en}.jpg`}
                    sx={{ width: 60, height: 60 }} />
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={item.name}
                subheader="September 14, 2016"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {item.address}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          )
        })
      }
    </>
  )
}

export default Users;