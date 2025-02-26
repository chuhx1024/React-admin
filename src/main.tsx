import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import App from './App.tsx'
import store from './stores' // 引入你创建的 store

import '@ant-design/v5-patch-for-react-19'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>,
)
