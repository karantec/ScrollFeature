import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartData = {
    items: [
      {
        id: 1,
        name: 'Rose Petals Divine',
        category: 'Jewellery',
        price: 120.0,
        quantity: 1,
        image: 'https://www.thugil.com/pub/media/catalog/product/cache/e803c1b4714a8f5bf8d014633abc652b/g/d/gdmini192.jpg',
      },
      {
        id: 2,
        name: 'Rose Petals Divine',
        category: 'Jewellery',
        price: 120.0,
        quantity: 2,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSU-JFpMWpuLMOHfixho7bHK3oMk49GOW0ng&s',
      },
      {
        id: 3,
        name: 'Rose Petals Divine',
        category: 'Jewellery',
        price: 120.0,
        quantity: 1,
        image: 'https://i0.wp.com/www.princeimitationjewellery.com/wp-content/uploads/2020/08/Step-haram-17inch.-Model-No-2554_price3296_-.jpg?fit=800%2C1200&ssl=1',
      },
    ],
  };

  const [cartItems, setCartItems] = useState(cartData.items);
  const [shippingMethod, setShippingMethod] = useState('Second Delivery');

  // Calculate Total Price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Update Item Quantity
  const updateQuantity = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );
  };

  // Remove Item from Cart
  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div>
      <section className="relative z-10 after:contents-[''] after:absolute after:z-0 after:h-full xl:after:w-1/3 after:top-0 after:right-0 after:bg-gray-50">
        <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto relative z-10">
          <div className="grid grid-cols-12">
            {/* Cart Items Section */}
            <div className="col-span-12 xl:col-span-8 lg:pr-8 pt-14 pb-8 lg:py-24 w-full max-xl:max-w-3xl max-xl:mx-auto">
              <div className="flex items-center justify-between pb-8 border-b border-gray-300">
                <h2 className="font-manrope font-bold text-3xl leading-10 text-black">Shopping Cart</h2>
                <h2 className="font-manrope font-bold text-xl leading-8 text-gray-600">
                  {cartItems.length} Items
                </h2>
              </div>

              {/* Cart Items Rendering */}
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6 border-b border-gray-200 group"
                >
                  <div className="w-full md:max-w-[126px]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="mx-auto rounded-xl object-cover"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 w-full">
                    <div className="md:col-span-2">
                      <div className="flex flex-col max-[500px]:items-center gap-3">
                        <h6 className="font-semibold text-base leading-7 text-black">{item.name}</h6>
                        <h6 className="font-normal text-base leading-7 text-gray-500">{item.category}</h6>
                        <h6 className="font-medium text-base leading-7 text-gray-600 group-hover:text-indigo-600">
                          ${item.price.toFixed(2)}
                        </h6>
                      </div>
                    </div>
                    <div className="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
                      <div className="flex items-center h-full">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="group rounded-l-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center hover:bg-gray-50"
                        >
                          -
                        </button>
                        <input
                          type="text"
                          value={item.quantity}
                          onChange={(e) =>
                            updateQuantity(item.id, parseInt(e.target.value) || 1)
                          }
                          className="border-y border-gray-200 outline-none text-center w-[73px] py-[15px] bg-transparent"
                        />
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="group rounded-r-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center hover:bg-gray-50"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
                      <p className="font-bold text-lg text-gray-600 group-hover:text-indigo-600">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-4 text-red-500 hover:text-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Add Coupon Code */}
              <div className="flex items-center justify-end mt-8">
                <button className="flex items-center px-5 py-3 rounded-full gap-2 text-indigo-600 hover:text-indigo-700">
                  Add Coupon Code
                </button>
              </div>
            </div>

            {/* Order Summary Section */}
            <div className="col-span-12 xl:col-span-4 bg-gray-50 w-full max-xl:px-6 max-w-3xl xl:max-w-lg mx-auto lg:pl-8 py-24">
              <h2 className="font-manrope font-bold text-3xl leading-10 text-black pb-8 border-b border-gray-300">
                Order Summary
              </h2>
              <div className="mt-8">
                <div className="flex items-center justify-between pb-6">
                  <p className="font-normal text-lg leading-8 text-black">{cartItems.length} Items</p>
                  <p className="font-medium text-lg leading-8 text-black">
                    ${calculateTotal().toFixed(2)}
                  </p>
                </div>
                <Link to="/checkout"><button className="w-full text-center bg-indigo-600 rounded-xl py-3 px-6 font-semibold text-lg text-white hover:bg-indigo-700">
                  Checkout
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
