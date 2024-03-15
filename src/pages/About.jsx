import React from 'react';
import { Navbar } from '../components/Navbar';
import { Copyright } from '../components/Copyright';

export const About = () => {
  return (
    <div className='front-page-color'>
        
          <div className="container">
          <Navbar />
            </div>  
      <div className="container mt-5">
        <div className="card about py-5 text-center">
          <div className="row">
            <div className="col-12">
              <div className="card-body p-5 about-height">
                <h5 className="card-title h2 display-3 pt-5 py-2 fw-bold text-dark">About</h5>
                <p className="card-text text-dark">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sint provident maxime necessitatibus
                  quidem sapiente atque tempore laboriosam ducimus! Dolorem velit at cumque nam blanditiis, in quisquam
                  molestias placeat doloremque eaque nemo aliquam consequatur iusto quae? Maiores ipsa unde ratione nemo
                  laboriosam in, vel debitis laudantium error, voluptatum totam velit dolor magnam facilis modi dolorem
                  iure. Optio beatae at unde delectus accusamus, libero cumque veniam amet qui, dignissimos enim assumenda
                  deserunt et! Ut illo at quos quae aspernatur, sunt libero numquam repellendus ex omnis a voluptatem
                  natus laborum minus asperiores dicta hic nisi, totam ipsam veniam ullam deleniti! Minus, facilis. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Nulla dolor nemo perspiciatis magnam dicta harum
                  assumenda, similique facere impedit voluptatibus iusto beatae nesciunt officia possimus natus, ducimus
                  eos magni molestiae, quaerat minima architecto voluptatem ratione a? Ipsum exercitationem dicta
                  adipisci excepturi, officia debitis, facere consequuntur nihil vel voluptas quisquam nobis. sit amet
                  consectetur adipisicing elit. Tempora harum eum, ea aperiam quidem nisi minima quae veritatis ad
                  voluptate.
                </p>
              </div>
            </div>
            <div className="col-12">
              <img src="/assets/Images/product-img.WEBP" className="img-fluid" alt="" />
            </div>
          
        <Copyright />
      </div>
            </div>
        </div>
      
    </div>
  );
};
