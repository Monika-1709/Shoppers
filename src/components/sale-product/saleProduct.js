import cameraImg from "@/image/camera1.png";
import Image from "next/image";
export default function SaleProduct({
  image,
  productName,
  price,
  originalPrice,
  discount,
}) {
  return (
    <>
      <div style={{ border: "1px solid red" }}>
        <Image src={image} alt="camera" />
        <p>{productName}</p>
        <div>
          <p>{price}</p>
          <del style={{ color: "#4D4D4F" }}>{originalPrice}</del>
          <h4 style={{ color: "#008000" }}>{discount}</h4>
        </div>
      </div>
    </>
  );
}
