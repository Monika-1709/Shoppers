export default function WhishlistPage({ wishlistData }) {
  return (
    <div>
      <div>
        <h1>Wishlist Page</h1>
        <ul>
          {wishlistData &&
            wishlistData.map((item) => (
              <li key={item.id}>
                {/* Display wishlist item details */}
                {item.title}
              </li>
            ))}
        </ul>
      </div>
      );
    </div>
  );
}
