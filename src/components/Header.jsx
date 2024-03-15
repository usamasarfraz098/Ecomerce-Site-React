import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div>
        {/* main header  */}
<div className="card card1 text-center mb-3" style={{width: `${100}%`,height:`${739}px`}}>
    {/* <img src="/assets/Images/blog-1.jpg" alt="" /> */}
  <div class="card-body">
    <h5 class="card-title h1 display-3 fw-bold text-light">Special title treatment</h5>
    <p class="card-text display-6 text-gray">content</p>
    <Link to="/Shop" class="btn btn-dark">Shop Now</Link>
  </div>
</div>
    </div>
  )
}
