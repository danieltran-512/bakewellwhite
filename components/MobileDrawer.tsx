import { Drawer, Hidden, IconButton, List, ListItem, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/system'
import Link from 'next/link'
import React from 'react'

//Render a mobile drawer on mobile view
export const MobileDrawer = ({open, onClose} : {open: boolean, onClose: any}) => {
  return (
    <Hidden smUp>
    <Drawer
    anchor='top'
    open={open}
    onClose={onClose}
    >
    <Box
      sx={{ width: '100vw', height: '80vh'}}
    >
        <IconButton
        sx ={{
            position: 'absolute',
            top: '1em',
            right: '1em',
            zIndex: 10
        }}
        onClick={onClose}
        >
            <CloseIcon />
        </IconButton>
        <List sx={{
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '80%',
        }}
        >
            <ListItem>
                <Typography variant='button'>
                    <Link href={'#'}>
                        Expertise
                    </Link>
                </Typography>
            </ListItem>

            <ListItem>
                <Typography variant='button'>
                    <Link href={'#'}>
                        Portfolio
                    </Link>
                </Typography>
            </ListItem>

            <ListItem>
                <Typography variant='button'>
                    <Link href={'#'}>
                        Awards
                    </Link>
                </Typography>
            </ListItem>

            <ListItem>
                <Typography variant='button'>
                    <Link href={'#'}>
                        Contact us
                    </Link>
                </Typography>
            </ListItem>
        </List>

     </Box>
    </Drawer>
    </Hidden>
  )
}
