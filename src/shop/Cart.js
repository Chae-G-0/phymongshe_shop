import React from "react";

const Cart = ({ cart }) => {
    return (
        <div style={{ paddingTop: "100px" }}>
            {cart.map((ca) => {
                return (
                    <ul>
                        <li>{ca.id}</li>
                        <li>{ca.itm}</li>
                        <li>{ca.price}</li>
                    </ul>
                );
            })}
        </div>
    );
};

export default Cart;
