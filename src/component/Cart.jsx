import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CarItems from "./CarItems";
import { delCart, incQty, decQty } from "../redux/action";

function Cart() {
    const carItems = useSelector((state) => state.handleCart);
    const priceList = [];
    const dispatch = useDispatch();
    function calculateTotalPrice() {
        carItems.forEach((item) => {
            priceList.push(item.price * item.qty);
        });
    }
    if (carItems) {
        calculateTotalPrice();
    }
    const totalPrice = priceList.reduce((acc, cur) => acc + cur);

    const removeItem = (product) => {
        dispatch(delCart(product));
    };

    const incrementQuantity = (product) => {
        dispatch(incQty(product));
    };

    const decrementQuantity = (product) => {
        dispatch(decQty(product));
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="d-flex col shopping-header">
                        <h1 className="text-left mt-5">
                            Shopping Cart Items[{carItems.length}]
                        </h1>
                        <h3 className="d-flex align-items-end justify-content-between">
                            Total price : ${totalPrice}
                        </h3>
                    </div>
                </div>
                <div className="row mt-5 d-flex gap-4">
                    {carItems &&
                        carItems.map((items) => {
                            return (
                                <CarItems
                                    title={items.title}
                                    price={items.price}
                                    image={items.image}
                                    category={items.category}
                                    removeItem={removeItem}
                                    fullItem={items}
                                    quantity={items.qty}
                                    increaseQty={incrementQuantity}
                                    decreaseQty={decrementQuantity}
                                />
                            );
                        })}
                </div>
            </div>
        </div>
    );
}

export default Cart;
