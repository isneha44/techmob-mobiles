import { useCart } from "CartContext";

import (useCart)
const mockProducts = [
    { id: 1, name: 'iPhone 14', price: 180000, image: '/iphone14.jpg' },
    { id: 2, name: 'Samsung Galaxy S23', price: 160000, image: '/s23.jpg' },
    { id: 3, name: 'Xiaomi Redmi Note 13', price: 85000, image: '/redmi.jpg' },
  ];
  
  function Products() {
    const { dispatch } = useCart();

    return (
      <div className="container mt-4">
        <h2 className="mb-4">Available Mobiles</h2>
        <div className="row">
          {mockProducts.map(product => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card h-100">
                <img src={product.image} className="card-img-top" alt={product.name} />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">Rs. {product.price.toLocaleString()}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
                  >
                    Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Products;
  