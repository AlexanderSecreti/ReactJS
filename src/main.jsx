import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { initializeApp } from "firebase/app";
import { CartContextProvider } from './context/CartContext'

const firebaseConfig = {
  apiKey: "AIzaSyC9z-YFSSbVGyEiXtHfcsrUJInWewRu3Bo",
  authDomain: "digitalcelu-4f258.firebaseapp.com",
  projectId: "digitalcelu-4f258",
  storageBucket: "digitalcelu-4f258.appspot.com",
  messagingSenderId: "760513249064",
  appId: "1:760513249064:web:d18a400a3434d949821a1d"
};
const app = initializeApp(firebaseConfig);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartContextProvider>
    <BrowserRouter>
      <App id='principal' />
    </BrowserRouter>
    </CartContextProvider>
  </React.StrictMode>
)
