"use client";
import { Checkbox } from "antd";
import ProductList from "@/components/productList/product";
import Image from "next/image";
const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};
export default function ProductPage() {
  return (
    <>
      <main>
        <section style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div>
            <h1>Ecommerce Acceories & Fashion item </h1>
            <p>About 9,620 results (0.62 seconds)</p>
          </div>
          <div style={{ display: "flex" }}>
            <p>Per Page </p>
            <p>Sort By</p>
          </div>
        </section>
        <section style={{ display: "flex" }}>
          <div>
            <div>
              <h1>Price Filter</h1>
              <div>
                <Checkbox onChange={onChange}>$0.00-$150.00</Checkbox>
              </div>
              <div>
                <Checkbox onChange={onChange}>$150.00-$250.00</Checkbox>
              </div>
              <div>
                <Checkbox onChange={onChange}>$250.00-$450.00</Checkbox>
              </div>
              <Checkbox onChange={onChange}>$450.00</Checkbox>
            </div>
            <div>
              <h1>Categories</h1>
              <div>
                <Checkbox onChange={onChange}>Phone</Checkbox>
              </div>
              <div>
                <Checkbox onChange={onChange}>Laptop</Checkbox>
              </div>
              <div>
                <Checkbox onChange={onChange}>Clothes</Checkbox>
              </div>
              <div>
                <Checkbox onChange={onChange}>Bags</Checkbox>
              </div>
            </div>
            <div>
              <h1>Brand</h1>
              <div>
                <Checkbox onChange={onChange}>Apple</Checkbox>
              </div>
              <div>
                <Checkbox onChange={onChange}>Samsung</Checkbox>
              </div>
              <div>
                <Checkbox onChange={onChange}>Dell</Checkbox>
              </div>
              <div>
                <Checkbox onChange={onChange}>HP</Checkbox>
              </div>
              <div>
                <Checkbox onChange={onChange}>Nike</Checkbox>
              </div>
              <div>
                <Checkbox onChange={onChange}>Adidas</Checkbox>
              </div>
            </div>
            <div>
              <h1>Discout Offer</h1>
              <div>
                <Checkbox onChange={onChange}>10% Off</Checkbox>
              </div>
              <div>
                <Checkbox onChange={onChange}>20% Off</Checkbox>
              </div>
              <div>
                <Checkbox onChange={onChange}>30% Off</Checkbox>
              </div>
              <div>
                <Checkbox onChange={onChange}>40% Off</Checkbox>
              </div>
            </div>
          </div>
          <div>
            <ProductList />
          </div>
          {/* <div> */}
          {/* <Image src="/tshirt.png" alt="tshirt" /> */}
        </section>
      </main>
    </>
  );
}
