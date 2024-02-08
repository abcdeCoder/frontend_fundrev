import React from 'react';
import ReactDOM from 'react-dom';
import App from './index.js'; // Assuming App.tsx is in the same directory

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Root element with id "root" not found in the document.');
}