import React, { useState, useEffect } from 'react';
import ItemCard from '../components/ItemCard';

function Home() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('/api/items')
            .then(response => response.json())
            .then(data => setItems(data));
    }, []);

    return (
        <div>
            <h1>Items</h1>
            <div className="item-list">
                {items.map(item => (
                    <ItemCard key={item._id} item={item} />
                ))}
            </div>
        </div>
    );
}

export default Home;
