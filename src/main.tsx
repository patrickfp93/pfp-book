import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/index.tsx'
import "./main.less";
import { Provider } from 'react-redux';
import { store } from './services/context/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>      
      <App />
    </Provider> 
  </React.StrictMode>,
)
