// import { useState, useEffect } from "react";
// import { Rate, Button } from "antd";
// import styles from "./product.module.css";
// import { HeartOutlined } from "@ant-design/icons";

// export default function ProductList() {
//   const [data, setData] = useState([]);
//   const [wishlistData, setWishlistData] = useState([]);
//   const [cartData, setCartData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(`https://fakestoreapi.com/products`);
//       const jsonData = await response.json();
//       setData(jsonData);
//     };

//     fetchData();
//   }, []);
//   const handelWishlisht = (item) => {
//     setWishlistData([...wishlistData, item]);
//   };
//   const handelCart = (item) => {
//     setCartData([...cartData, item]);
//   };

//   const Rating = ({ rate, count }) => (
//     <div>
//       <p>
//         Rating: {rate} ({count} reviews)
//       </p>
//     </div>
//   );
//   return (
//     <div className={styles.container}>
//       <ul>
//         {data.map((item) => (
//           <li key={item.id} className={styles.items}>
//             <img src={item.image} alt={item.title} />
//             <div className={styles.itemsDescriptions}>
//               <span>{item.title}</span>
//               <p>
//                 <span style={{ color: "gray" }}>price: </span>
//                 Rs {item.price}
//               </p>
//               <Rate value={(item.rating.rate / 5) * 5} disabled />
//               <span> {item.rating.count} reviews</span>
//               <div>
//                 <Button
//                   type="primary"
//                   style={{ marginTop: "1rem" }}
//                   onClick={handelCart}
//                 >
//                   Add to cart
//                 </Button>
//                 <Button
//                   style={{ marginTop: "1rem", marginLeft: "1rem" }}
//                   onClick={handelWishlisht}
//                 >
//                   <HeartOutlined />
//                 </Button>
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// ProductList Component (ProductList)
// import { useState, useEffect } from "react";
// import { Rate, Button } from "antd";
// import styles from "./product.module.css";
// import { HeartOutlined } from "@ant-design/icons";

// export default function ProductList({ handleWishlist, handleCart }) {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(`https://fakestoreapi.com/products`);
//       const jsonData = await response.json();
//       setData(jsonData);
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className={styles.container}>
//       <ul>
//         {data.map((item) => (
//           <li key={item.id} className={styles.items}>
//             <img src={item.image} alt={item.title} />
//             <div className={styles.itemsDescriptions}>
//               <span>{item.title}</span>
//               <p>
//                 <span style={{ color: "gray" }}>price: </span>
//                 Rs {item.price}
//               </p>
//               <Rate value={(item.rating.rate / 5) * 5} disabled />
//               <span> {item.rating.count} reviews</span>
//               <div>
//                 <Button
//                   type="primary"
//                   style={{ marginTop: "1rem" }}
//                   onClick={() => handleCart(item)}
//                 >
//                   Add to cart
//                 </Button>
//                 <Button
//                   style={{ marginTop: "1rem", marginLeft: "1rem" }}
//                   onClick={() => handleWishlist(item)}
//                 >
//                   <HeartOutlined />
//                 </Button>
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { Rate, Button } from "antd";
import styles from "./product.module.css";
import { HeartOutlined } from "@ant-design/icons";

export default function ProductList({ handleWishlist, handleCart }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, []);
  // console.log("handleCart prop in ProductList:", handleCart);
  const handleWishlistClick = (item) => {
    handleWishlist(item);
  };
  const handleCartClick = (item) => {
    handleCart(item);
  };

  return (
    <div className={styles.container}>
      <ul>
        {data.map((item) => (
          <li key={item.id} className={styles.items}>
            <img src={item.image} alt={item.title} />
            <div className={styles.itemsDescriptions}>
              <span>{item.title}</span>
              <p>
                <span style={{ color: "gray" }}>price: </span>
                Rs {item.price}
              </p>
              <Rate value={(item.rating.rate / 5) * 5} disabled />
              <span> {item.rating.count} reviews</span>
              <div>
                <Button
                  type="primary"
                  style={{ marginTop: "1rem" }}
                  onClick={() => handleCartClick(item)}
                >
                  Add to cart
                </Button>
                <Button
                  style={{ marginTop: "1rem", marginLeft: "1rem" }}
                  onClick={() => handleWishlistClick(item)}
                >
                  <HeartOutlined />
                </Button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
