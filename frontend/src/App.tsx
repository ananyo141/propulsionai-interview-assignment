import React, { useState, useEffect } from 'react';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';
import SearchItem from './components/SearchItem';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getItems } from "./network/items"

function App() {
  const [items, setItems] = useState([]);

  const fetchItems = () => {
    getItems()
      .then(data => setItems(data))
      .catch(err => toast(err.message, { type: 'error' }));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Item Management</h1>
      <ItemForm fetchItems={fetchItems}/>
      <SearchItem />
      <ItemList items={items}/>
      <ToastContainer />
    </div>
  );
}

export default App;
