import React from 'react';
import Navigation from './src/navigation';
import Store from './src/context/store';

export default function App() {
  return (
    <Store>
      <Navigation />
    </Store>
  );
}
