import { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from "react-redux"
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import SuspenseContent from './containers/SuspenseContent.jsx'
import  store from './app/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback={<SuspenseContent />}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </Suspense>
)