import React from 'react';
import { Outlet } from 'react-router-dom';

import Navigation from './components/Navigation';


function App() {
  return (
    <div>
      <Navigation />
      <main className="mx-3">
        <Outlet />
      </main>
    </div>
  );
}

export default App;