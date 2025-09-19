import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import store from './app/store.js';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      {/* ✅ Toast provider must be inside Provider but outside App */}
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 2500, // 2.5 seconds
          style: {
            borderRadius: "8px",
            background: "#333",
            color: "#fff",
          },
        }}
      />
    </Provider>
  </StrictMode>
);
