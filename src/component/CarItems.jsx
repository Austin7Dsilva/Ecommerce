import React from "react";

export default function CarItems(props) {
    return (
        <div className="carItems d-flex gap-5">
            <div className="carItemsImage">
                <img
                    width={200}
                    height={200}
                    alt={props.title}
                    src={props.image}
                />
            </div>
            <div className="carItemsContent">
                <h2>{props.title}</h2>
                <h4>{props.category}</h4>
                <h5>${props.price}</h5>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => props.removeItem(props.fullItem)}
                >
                    Remove Item
                </button>
            </div>
        </div>
    );
}
