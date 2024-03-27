import React from 'react';
import './toDo.css';
import Header  from './Header';
import { dataShop } from './shopdata';
import product from './product';

const Shop = () => {
    return (
        <>
        <Header/>
        

        {dataShop.map((obj) => product(obj))}
        </>
    )
}

export default Shop;