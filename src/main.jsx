import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainDashboard from './components/MainDashboard.jsx'
import { Provider } from 'react-redux'
import store from './store/index.js'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <MainDashboard />
    </Provider>
)
