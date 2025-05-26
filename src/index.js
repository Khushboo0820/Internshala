import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // This will now be your artifact component
import './index.css'; // If you have this

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);