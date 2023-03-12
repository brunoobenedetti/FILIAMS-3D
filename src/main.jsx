import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { initFirebase} from './firebase/config';

initFirebase()


ReactDOM.createRoot(document.getElementById('root')).render(<App />)
