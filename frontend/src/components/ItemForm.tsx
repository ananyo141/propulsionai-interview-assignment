import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { createItem } from "../network/items";

const ItemForm = ({fetchItems}: any) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      toast('Please enter a name', { type: 'error'});
      return;
    }
      createItem(name)
      .then(data => {
        setName('');
        fetchItems();
        console.log(data);
      })
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <label className="block mb-2">
        Item Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full"
        />
      </label>
      <button type="submit" className="bg-blue-500 text-white p-2">Add Item</button>
    </form>
  );
};

export default ItemForm;
