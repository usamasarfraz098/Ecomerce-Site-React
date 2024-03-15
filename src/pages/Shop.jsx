import React from 'react'
import { Subheader } from '../components/Subheader'
import { Navbar } from '../components/Navbar'
import { Copyright } from '../components/Copyright'

export const Shop = () => {
  return (
    <div>
        
        <div className="container text-centre mt-2 mb-5">
        <Navbar/>
            <div className="text h4 display-9 ">Shop</div>
          <Subheader/>
          
        </div>
        <Copyright/>
    </div>
  )
}
