import React from "react";
import { NavLink } from "react-router-dom";

export default function CarItems(props) {
    return (
        <div className="carItems d-flex gap-5">
            <div className="carItemsImage">
                <NavLink to={`/products/${props.fullItem.id}`}>
                    <img
                        width={200}
                        height={200}
                        alt={props.title}
                        src={props.image}
                    />
                </NavLink>
            </div>
            <div className="carItemsContent">
                <h2>{props.title}</h2>
                <h4>{props.category}</h4>
                <h5>${props.price}</h5>
                <div className="cartBUttonDiv">
                    <div className="cartCounterDiv">
                        <button
                            disabled={props.quantity === 0}
                            className="minusButton"
                            onClick={() => props.decreaseQty(props.fullItem)}
                        >
                            -
                        </button>
                        {props.quantity}
                        <button
                            className="addButton"
                            onClick={() => props.increaseQty(props.fullItem)}
                        >
                            +
                        </button>
                    </div>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => props.removeItem(props.fullItem)}
                    >
                        Remove Item
                    </button>
                </div>
            </div>
        </div>
    );
}
