// To add and item to cart

export const addCart = (product) => {
    return {
        type: "ADDITEM",
        payload: product,
    };
};

export const delCart = (product) => {
    return {
        type: "DELITEM",
        payload: product,
    };
};

export const incQty = (product) => {
    return {
        type: "INCEQTY",
        payload: product,
    };
};

export const decQty = (product) => {
    return {
        type: "DECEQTY",
        payload: product,
    };
};
