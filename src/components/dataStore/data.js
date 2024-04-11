// Parent Component (ParentComponent)
import { useState } from "react";
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import WishlistPage from "./WishlistPage";
import CartPage from "./CartPage";

export default function ParentComponent() {
  const [wishlistData, setWishlistData] = useState([]);
  const [cartData, setCartData] = useState([]);

  const handleWishlist = (item) => {
    setWishlistData([...wishlistData, item]);
  };

  const handleCart = (item) => {
    setCartData([...cartData, item]);
  };

  return (
    <div>
      <Navbar wishlistCount={wishlistData.length} cartCount={cartData.length} />
      <ProductList handleWishlist={handleWishlist} handleCart={handleCart} />
      <WishlistPage wishlistData={wishlistData} />
      <CartPage cartData={cartData} />
    </div>
  );
}
