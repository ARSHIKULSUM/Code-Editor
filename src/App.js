import React from 'react'
import './App.css';
import MainFile from './organisms/home';

import DataProvider from './contextapi/dataProvider';

function App() {
  return (
    <DataProvider>
        <MainFile />
    </DataProvider>
  );
}

export default App;
