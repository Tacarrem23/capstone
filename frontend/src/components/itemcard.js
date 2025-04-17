import React from 'react';

function ItemCard({ item }) {
    return (
        <div className="item-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Category: {item.category}</p>
        </div>
    );
}

export default ItemCard;
