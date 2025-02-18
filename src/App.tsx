import { RouterProvider } from 'react-router-dom'
import router from './router'

const appStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    width: '100vw',
    height: '100vh',
}
function App() {
    return (
        <div style={appStyle}>
            <RouterProvider router={router} />
        </div>
    )
}

export default App
