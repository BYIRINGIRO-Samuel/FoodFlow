
import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContent";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

/**
 * Cart - Main component for displaying shopping cart
 *
 * @returns {JSX.Element} Rendered cart page with items, totals, and checkout button
 */
function Cart() {
  // Destructure cart-related data and methods from StoreContext
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);

  // Initialize navigation hook for redirecting to checkout/order page
  const navigate = useNavigate();

  return (
    <div className="cart">
      {/* Cart Items Section - Displays all items in the shopping cart */}
      <div className="cart-items">
        {/* Header row with column labels */}
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {/* Map through food list and display items that exist in cart */}
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                {/* Display cart item details with image, name, price, quantity, and total */}
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  {/* Remove button - triggers removeFromCart function on click */}
                  <p onClick={() => removeFromCart(item._id)} className="close">
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>

      {/* Cart Bottom Section - Contains totals and promo code input */}
      <div className="cart-bottom">
        {/* Cart Totals Summary Box */}
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            {/* Subtotal - Sum of all item prices */}
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />

            {/* Delivery Fee - $2 applied only if cart is not empty */}
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />

            {/* Total Amount - Subtotal + Delivery Fee */}
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </div>
          </div>
          {/* Checkout Button - Navigates to order/payment page */}
          <button onClick={() => navigate("/order")}>
            PROCEED TO CHECK OUT
          </button>
        </div>

        {/* Promo Code Section - Allows users to apply discount codes */}
        <div className="cart-promocode">
          <div>
            <p>If you have a promocode, Enter it here</p>
            <div className="cart-promocode-input">
              {/* Promo code input field */}
              <input type="text" placeholder="promocode" />
              {/* Submit button for promo code validation */}
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Export the Cart component for use in routing and other parts of the application
export default Cart;
