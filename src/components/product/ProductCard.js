import { Button, Card, CardActions, Grid,  Rating,  Typography } from '@mui/material'
import { Link, useLocation } from 'react-router-dom';
import { Box, display, styled } from '@mui/system'
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { isUserAdmin } from '../../application';
import { addToCart, rateProduct, removeFromCart, setSelectedProduct, useCartItems, useUserInfo } from '../../redux';
import { Ratings } from './Rating';
const StyledCardContainer = styled(Box)(()=>({
    display:"felx",
    flexDirection:"colum",
    justifyContent:"space-between"  
}));
const StyledBox = styled(Box)(()=>({
  display:"flex",
  justifyContent:"space-between",
}));

export const ProductCard = ({name,_id,description,brand,price,category,image,averageRating}) => {
  const cartItems = useCartItems();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useUserInfo();
  const isProductInCart = cartItems?.find((item)=>item.product._id === _id);
  const onEdit =()=>{
    dispatch(setSelectedProduct({
      product:{
        name,
        _id, 
        image,
        price,
        category,
        brand,   
        description,
        averageRating,
      }
    }))
    navigate(`/products/edit/${name}`)
  }
  const {pathname, search} = useLocation();
  // console.log("location",`${pathname}${search}` );

  const onRatingChange =(e)=>{
     console.log("e.target.value",e.target.value);
     dispatch(rateProduct({ productId:_id, userId:userInfo?._id,
      url:`${category}${search}&size=2`,
      isHome: pathname ==="/",
      rating: e.target.value,
    }))
  }

  return (
    
  <Grid item>
    <Card>
      <Link to={`/products/categories/${category}/${name}`} state={{ id: _id}}>
     <img src={image} alt={`${category} ${name}`} width="200px" height="200px" />
     <StyledCardContainer>
       <Typography>{name}</Typography>
       <Typography>{price}</Typography>
    </StyledCardContainer>
   </Link>
        <CardActions>
          <Ratings value={averageRating} isDisabled={!userInfo} onChange={onRatingChange}/>
          <StyledBox>
            {isProductInCart ? (
              <>
                 <Button 
                 onClick={()=>{dispatch(addToCart({_id,price,name}))}}
                 >
                  Add to cart
                 </Button>
             <Button onClick={()=>dispatch(removeFromCart(_id))}>Remove from cart</Button>
              </>
            ):( <Button onClick={()=>{
              return dispatch(addToCart({_id, price, name}))
            }}>add to cart first time</Button>
            )}
          {isUserAdmin(userInfo) && <Button onClick={onEdit}>edit</Button>}
          </StyledBox>
        </CardActions>
        </Card>
    </Grid>
  )
}
