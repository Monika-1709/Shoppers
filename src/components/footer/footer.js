import { Input, Button, Space } from "antd";
import { CopyrightOutlined, SendOutlined } from "@ant-design/icons";
export default function Footer() {
  return (
    <>
      <footer style={{ display: "flex", justifyContent: "space-evenly" }}>
        <section>
          <h2>Exclusive</h2>
          <h3>Subscribe</h3>
          <p>Get 10% off on your first Order</p>
          {/* <input type="email" placeholder="Enter your email" /> */}
          <Input
            placeholder="Enter email"
            suffix={<Button type="primary" icon={<SendOutlined />} />}
            style={{ width: 200 }}
          />
        </section>
        <section>
          <h2>Support</h2>
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>support@gmail.com</p>
          <p>+880 123456789</p>
        </section>
        <section>
          <h1>Account</h1>
          <p>My Account </p>
          <p>Login/Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
        </section>
        <section>
          <h1>Quick Link</h1>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>FAQ</p>
          <p>Return Policy</p>
        </section>
      </footer>
      <p>
        <span>
          <CopyrightOutlined />
        </span>
        Copyright Rimel 2022. All right reserved
      </p>
    </>
  );
}
