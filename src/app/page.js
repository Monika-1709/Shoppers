import styles from "./page.module.css";
import logoImg from "@/image/applelogo.jpg";
import phoneImg from "@/image/phone.png";
import cameraImg from "@/image/camera1.png";
import SaleProduct from "@/components/sale-product/saleProduct";
import chairImg from "@/image/chair1.png";
import laptopImg from "@/image/laptop1.jpg";
import watchImg from "@/image/watch1.jpg";
import tshirtImg from "@/image/tshirt.png";
import bagImg from "@/image/bag1.png";
import desktopImg from "@/image/pc.png";
import jblImg from "@/image/jblbt.png";
import supportLogo from "@/image/support.png";
import qualityLogo from "@/image/premium-quality .png";
import deliveryLogo from "@/image/free-delivery.png";
import cashbackLogo from "@/image/cashback.png";
import { Card } from "antd";
import { Button } from "antd";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.content}>
          <div style={{ color: "white" }}>
            <div>
              <Image src={logoImg} alt="logo" />
              <p>iPhone 15 Series</p>
            </div>
            <h1>Up to 10% Off Voucher</h1>
            <Button
              type="text"
              style={{ color: "white", borderBottom: "1px solid white" }}
            >
              Shop Now
              <span style={{ color: "white" }}>-{">"}</span>
            </Button>
          </div>
          <div>
            <Image src={phoneImg} alt="phone" />
          </div>
        </section>
        <section style={{ border: "1px solid red", height: "40vh" }}>
          <h1 style={{ alignContent: "center" }}>Flash Sales</h1>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <SaleProduct
              image={cameraImg}
              productName="Canon EOS 200D"
              price="$120"
              originalPrice="$150"
              discount="45% Off"
            />
            <SaleProduct
              image={desktopImg}
              productName="Desktop PC"
              price="$120"
              originalPrice="$140"
              discount="40% Off"
            />
            <SaleProduct
              image={tshirtImg}
              productName="Men T-Shirt"
              price="$5"
              originalPrice="$10"
              discount="50% Off"
            />
            <SaleProduct
              image={laptopImg}
              productName="Macbook Pro"
              price="$1200"
              originalPrice="$1500"
              discount="25% Off"
            />
            <SaleProduct
              image={watchImg}
              productName="Smart Watch"
              price="$120"
              originalPrice="$150"
              discount="45% Off"
            />
            <SaleProduct
              image={bagImg}
              productName="Bag"
              price="$12"
              originalPrice="$15"
              discount="25% Off"
            />
            <SaleProduct
              image={laptopImg}
              productName="Macbook Pro"
              price="$1200"
              originalPrice="$1500"
              discount="25% Off"
            />
          </div>
        </section>
        <h1 style={{ textAlign: "center", margin: 10 }}>
          What Shoppers Offer!
        </h1>
        <section
          style={{
            display: "flex",
            border: "1px soli red",
            justifyContent: "space-evenly",
          }}
        >
          <div>
            <Card hoverable style={{ width: 300, height: 300 }}>
              <Image src={deliveryLogo} alt="support" />
              <h3>24/7 Support</h3>
              <p>
                Enjoy Free Shipping on All Orders! Shop Now and Get Your Items
                Delivered to Your Doorstep at No Extra Cost.
              </p>
            </Card>
          </div>
          <div>
            <Card hoverable style={{ width: 300, height: 300 }}>
              <Image src={cashbackLogo} alt="support" />
              <h3>24/7 Support</h3>
              <p>
                Get Cashback on Every Purchase! Shop Now and Earn Rewards on
                Your Orders. Enjoy Savings With Every Click!
              </p>
            </Card>
          </div>
          <div>
            <Card hoverable style={{ width: 300, height: 300 }}>
              <Image src={qualityLogo} alt="support" />
              <h3>24/7 Support</h3>
              <p>
                Experience Unmatched Quality! Shop with Confidence Knowing Our
                Products Are Crafted to Perfection. Elevate Your Shopping
                Experience with Premium Quality Products!"
              </p>
            </Card>
          </div>
          <div>
            <Card hoverable style={{ width: 300, height: 300 }}>
              <Image src={supportLogo} alt="support" />
              <h3>24/7 Support</h3>
              <p>
                Exceptional Support Every Step of the Way! Our Dedicated Team Is
                Here to Assist You With Any Questions or Concerns. Experience
                Hassle-Free Shopping with Our Reliable Support!
              </p>
            </Card>
          </div>
        </section>
        <section>
          <h1>Trending Product</h1>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <SaleProduct
              image={chairImg}
              productName="Office Chair"
              price="$120"
              originalPrice="$150"
              discount="20% Off"
            />
            <SaleProduct
              image={laptopImg}
              productName="Macbook Pro"
              price="$1200"
              originalPrice="$1500"
              discount="25% Off"
            />
            <SaleProduct
              image={watchImg}
              productName="Smart Watch"
              price="$120"
              originalPrice="$150"
              discount="45% Off"
            />
            <SaleProduct image={tshirtImg} />
          </div>
        </section>

        <section>
          <div
            style={{
              display: "flex",
              border: "1px solid red",
              backgroundColor: "#454545",
              color: "white",
            }}
          >
            <div>
              <Image src={jblImg} alt="jbl" />
            </div>
            <div>
              <h1>Enhance Your Music Experience</h1>
              <p>
                Fill the air with massive JBL Original Pro sound with deep,
                powerful bass. The JBL Boombox 3 Wi-Fi makes it feel like you’ve
                just stepped into the middle of a concert thanks to its powerful
                bass from a built-in subwoofer, two mid-range drivers, and dual
                tweeters, all of which make up its best-in-class 3-way speaker
                design
              </p>
              <Button type="text">
                Shop Now
                <span>-{">"}</span>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
