import { useCart } from 'CartContext';

function Cart() {
  const { cartItems, dispatch } = useCart();

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul className="list-group">
          {cartItems.map(item => (
            <li key={item.id} className="list-group-item d-flex justify-content-between">
              {item.name} - Rs. {item.price.toLocaleString()}
              <button
                className="btn btn-danger btn-sm"
                onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
