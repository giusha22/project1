import { Drawer, List, ListItem, ListItemText } from '@mui/material'
import { Box, padding, styled } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import { useCategories } from '../../redux'
import { SidebarHeader } from './SidebarHeader'

const StyledListItem = styled(ListItem)(()=>({
    padding:"5px 0px 3px 15px",
    margin:"0px",
    background:"yellow"
    
}))

export const Sidebar = () => {
    const sidebarItems =useCategories();
  return (
    <Drawer 
    variant='permanent'
    sx  ={{
        display: {xs: "block"},
        "& .MuiDrawer-paper": {
            width:"255px",
            height:"95%",
        },
    }}
    open={true}
    >
    <SidebarHeader/>
    <List>
        {sidebarItems.map((sidebarItem)=>{
            const {_id, name } = sidebarItem;
             return <React.Fragment key={_id}>
                <Link to={`/products/categories/${name}?page=1&sort=name,asc`}>
                <Box sx={{display:"flex"}}>
                    <StyledListItem>
                            <ListItemText primary={name}/>
                    </StyledListItem>
                </Box>
               </Link> 
             </React.Fragment>
        })}
    </List> 
    </Drawer>
  )
}
