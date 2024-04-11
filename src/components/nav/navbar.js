"use client";
import Link from "next/link";
import { useState } from "react";
import { Button, Input, Popover, Form } from "antd";
import {
  ShoppingCartOutlined,
  HeartOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import styles from "./navbar.module.css";

const onSearch = (value, _e, info) => console.log(info?.source, value);

const { Search } = Input;
export default function Navbar({ cartCount, wishlistCount }) {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  const content = (
    <Form>
      <Form.Item
        name="emailOrPhone"
        rules={[
          {
            required: true,
            message: "Please enter your email or phone number",
          },
        ]}
      >
        <Input placeholder="Email or Phone" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please enter your password" }]}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Login
      </Button>
      <div>
        <span>Don't have an account? </span>
        <a>Sign Up</a>
      </div>
    </Form>
  );

  return (
    <>
      <nav className={styles.nav}>
        <Button className={styles.menu} onClick={toggleMenu}>
          <MenuOutlined />
        </Button>
        <h1 className={styles.logo}>Shoppers</h1>

        <ul
          className={
            menuVisible ? `${styles.link} ${styles.open}` : styles.link
          }
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/product">Product</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* <div className={styles.search}> */}
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          enterButton
          className={styles.search}
        />
        {/* </div> */}

        <Popover
          placement="bottom"
          title="Login"
          content={content}
          trigger="click"
        >
          <Button>Login</Button>
        </Popover>
        {/* <Link href="/wishlist">
          <Button className={styles.cart} icon={<HeartOutlined />} />
        </Link>
        <Link href="/cart">
          <Button className={styles.cart} icon={<ShoppingCartOutlined />} />
        </Link> */}

        <Link href="/wishlist">
          <Button className={styles.cart} icon={<HeartOutlined />}>
            {wishlistCount > 0 && (
              <span className={styles.count}>{wishlistCount}</span>
            )}
          </Button>
        </Link>
        <Link href="/cart">
          <Button className={styles.cart} icon={<ShoppingCartOutlined />}>
            {cartCount > 0 && <span className={styles.count}>{cartCount}</span>}
          </Button>
        </Link>
        <p className={styles.profile}>Profile</p>
      </nav>
    </>
  );
}
