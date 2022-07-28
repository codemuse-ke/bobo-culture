import React from "react";
import Product from "./Product/Product";
import { Grid } from "@material-ui/core";
import { ShortTextSharp } from "@material-ui/icons";


const products = [
  {id:1, name:'shoes', description:'running shoes', price: '$6', image: "../assets/images/runningshoes.jpg" },
  {id:2, name:'Macbook', description:'Apple Macbook', price: '$90', image: "../assets/images/runningshoes.jpg"},
  {id:3, name:'Headphones', description:'Sony Heads', price: '$1000', image: "../assets/images/headphones.jpg"},
]

const Products = () => {
  return (
  <main>
    <Grid container justifyContent="center" spacing={4} >
      {products.map((product) => (    
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Product name={product.name} description={product.description} price={product.price} image={product.image}/>
        </Grid>      
        ))}
    </Grid>
  </main>
  )
}
export default Products;