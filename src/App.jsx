import React from "react";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import { FrontPage } from "./pages/FrontPage";
import { Navbar } from "./components/Navbar";
import { About } from "./pages/About";
import { Shop } from "./pages/Shop";
import { Products } from "./components/Products";
import { ProductPage } from "./pages/ProductPage";
import { Cart } from "./pages/Cart";



function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<FrontPage/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/Shop" element={<Shop/>}/>
     {/* <Route path="/shop" element={<Shop/>}/> */}
     <Route path="/products/:id" element={<ProductPage/>}/>
     <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
