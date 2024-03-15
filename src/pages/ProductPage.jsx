import React from 'react'
import { Navbar } from '../components/Navbar'
import { Contact } from './Contact'
import { Copyright } from '../components/Copyright'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';

export const ProductPage = () => {
 const {id}=useParams();
 console.log(id,'id')
 const[Product,setProduct]=useState({})
 useEffect(()=>{
     const FetchProduct=async()=>{
       const response=await fetch(`https://fakestoreapi.com/products/${id}`)
       const data=await response.json();
       console.log(data)
       setProduct(data)
     }
     FetchProduct()
 },[])

!Object.keys(Product).length>0 && <div>Product not found</div>

  const handleClick = () => {
    alert('Product has been added to your Cart');
  };
  return (
    <div>
        
          <div className="front-page-color">
        <div className="container pt-2">
        <Navbar/>
        <div className="front-page-color">
        <div className="contianer">
            <div className="row pt-5 mt-5">
                <div className="col-6">
                    <img src={Product.image} className='img-fluid' alt="" />
                </div>
                <div className="col-6">
                   <div className="product-heading fw-bold h5">{Product.title}</div> 
                   <div className="sku">
                    <span className='fw-bolder'>Category: </span><span className="sku-number">{Product.category}</span>
                   </div>
                   <div className="price fw-bolder">
                    Rs:<span className=' product-price'>{Product.price}$</span>

                   </div>
                   <div className="product-description">
                       {Product.description}
                   </div>
                   <div className="quantity fw-bolder">
                    <div>Quantity:</div>
                    <div className="product-quantity">
                        <input className='border w-25 my-2' type="number" name="quantity" id="product-quantity" />
                    </div>
                    <div className="card-wishlist mb-3 mt-7">
                        <span className="add-card-btn border py-1 me-2 px-5 btn btn-light" style={{zIndex:100}} onClick={handleClick}>Add to Cart</span>
                        <span className="wishlist border p-1 btn btn-light"><FontAwesomeIcon icon={faHeart} />
</span>
                    </div>
                    <button className='btn btn-dark'>Buy Now</button>
                   </div>
                </div>
            </div>
        </div>

        <div className="row mt-5 pt-5">
            <div className="col-4">       
    <div class="card border-left bg-gray">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero aliquid laboriosam ipsum reiciendis perspiciatis? Rem fuga porro itaque veritatis explicabo est ipsa, facilis perspiciatis architecto adipisci, tempore odio laudantium ad. Ipsam dolorum laboriosam ullam molestias sunt reprehenderit rerum nesciunt temporibus, numquam necessitatibus minima. Non atque molestiae laudantium! Natus, quasi excepturi? below as a natural lead-in to additional content.</p>
        
    </div>
  </div>
            </div>

            <div className="col-4">       
    <div class="card bg-gray">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium ut cupiditate fuga debitis rerum repellendus rem animi quis nemo sequi, nam sunt asperiores itaque iusto voluptatum, quam enim officia! Sequi beatae amet quae, magnam excepturi suscipit laudantium! Hic iusto, eius explicabo in velit placeat ad odit aspernatur libero voluptatum quaerat. below as a natural lead-in to additional content.</p>
       
    </div>
  </div>
            </div>

            <div className="col-4">       
    <div className="card bg-gray">
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsam officiis aspernatur nihil dignissimos quis delectus animi adipisci rerum neque nam tempore atque ipsa consequuntur reprehenderit totam, voluptates qui vitae magni! Delectus corporis minima eum fugiat natus voluptate eos eveniet iure expedita nobis quod, architecto totam optio odio dolore nesciunt. natural lead-in to additional content.</p>
        
    </div>
  </div>
            </div>
        </div>

    <Contact/>
    <Copyright/>
        
        </div>
        </div>
        
    </div>
    </div>
  )
}
