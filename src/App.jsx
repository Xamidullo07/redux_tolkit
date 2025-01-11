import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Navbar from './components/Navbar';
import MineItems from './components/MineItems';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <MineItems />
      </div>
    </Provider>
  );
}

export default App;