import React, { useEffect, useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Contact } from './Contact';
import { Subheader } from '../components/Subheader';
import { Products } from '../components/Products';
import { Copyright } from '../components/Copyright';
import { Header } from  '../components/Header'
export const FrontPage = () => {
  const[Product,setProducts]=useState([])
  useEffect(()=>{
      const FetchProducts=async()=>{
        const response=await fetch('https://fakestoreapi.com/products')
        const data=await response.json();
        console.log(data)
        setProducts(data)
      }
      FetchProducts()
  },[])
  return (
  
    <>
    
        <div className="container"> 
        <Navbar/>
        <Header/>
        <Subheader/>
        {/* {
          Product.length>0?
          <Products />
          :<div>Loading....</div>
        } */}
        <Products Product={Product}/>
        <Contact/>
       <Copyright/>
        </div>
     
    </>
  );
};
