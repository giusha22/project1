import React from 'react'
import { useHomePageProducts } from '../../redux'
import { GridComponent } from '../shared';
import { ProductCard } from './ProductCard';

export const HomePageProducts = () => {
    const homePageProducts = useHomePageProducts();
    console.log("homePageProducts",homePageProducts);
  return (
    <GridComponent>
      {homePageProducts.map((product)=>{
        return <ProductCard key={product._id}{...product}/>
        
    })}
    </GridComponent>
  )
}
