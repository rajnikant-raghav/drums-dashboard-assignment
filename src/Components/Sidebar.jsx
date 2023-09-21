import React from 'react'
import {  Avatar, Typography, Stack, Divider} from '@mui/material'

const Sidebar = () => {
  return (
    <>
          <Stack
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          p: 1,
          m: 1,
          height:'100vh',
          bgcolor: 'background.paper',
          borderRadius: 1,
          position:'fixed',
          top:-8,
          left:-8,
          bgcolor:'#212121',
          color:'gray',
          paddingTop:8,
          zIndex:1
        }}
      >
        <Avatar></Avatar>
        <Typography>Home</Typography>
        <Avatar></Avatar>
        <Typography>Home</Typography>
        <Avatar></Avatar>
        <Typography>Home</Typography>
        <Avatar></Avatar>
        <Typography>Home</Typography>
        <Avatar></Avatar>
        <Typography>Home</Typography>
        <Avatar></Avatar>
        <Typography>Home</Typography>
      </Stack>
    </>
  )
}

export default Sidebar