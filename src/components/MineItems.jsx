import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem } from '../store/mineSlice';
import '../styles/mineItems.css';

function MineItems() {
  const items = useSelector(state => state.mine.items);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };

  return (
    <div className="mine-items">
      <h2>Mine Items</h2>
      <div className="items-grid">
        {items.map(item => (
          <div key={item.id} className="item-card">
            <h3>{item.name}</h3>
            <button 
              className="delete-btn"
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MineItems;