import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import App from './App.tsx'

import '@ant-design/v5-patch-for-react-19'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
