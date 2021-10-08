import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getDataByKey, selectPosts } from '../../stores/log/slice';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type Props = {
  "id": string,
  "title": string,
  "timestamp": string,
  "log": string,
}

const Logs = () => {
  const posts = useSelector(selectPosts);

  const dispatch = useDispatch();
  useEffect(
    () => { dispatch(getDataByKey()) },
    [dispatch]
  );

  return (
    <>
      {
        posts && Object.keys(posts).length > 0 && posts.map((item: Props) => {
          return (
            <Box key={item.id} sx={{ margin: 1 }}>
              <Card variant="outlined">
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} align="left" color="text.secondary" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="h5" align="left" component="div">
                    {item.log}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} align="right" color="text.secondary">
                    {item.timestamp}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" >Learn More</Button>
                </CardActions>
              </Card>
            </Box>
          )
        })
      }
    </>
  )
}

export default Logs;