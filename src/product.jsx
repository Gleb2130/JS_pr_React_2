import React from "react";

const product = (obj) => {

    return (
        <div key={obj.id}>
            <h2>{obj.title}</h2>
            <img src={obj.image} alt="" className="product-img" />
            <h3> Price: {obj.price}</h3>
        </div>
    );
};

export default product;