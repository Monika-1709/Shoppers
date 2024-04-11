export default function CartPage({ cartData }) {
  return (
    <div>
      <h1>Cart Page</h1>
      <ul>
        {cartData &&
          cartData.map((item) => (
            <li key={item.id}>
              {/* Display cart item details */}
              {item.title}
            </li>
          ))}
      </ul>
    </div>
  );
}
