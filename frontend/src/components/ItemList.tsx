import { getItems } from "../network/items"
import React, { useState, useEffect } from 'react';

const ItemList = ({items}: any) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold">Items</h2>
      <ul className="list-disc pl-5 mt-2">
        {items?.length > 0 && items.map(item => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
