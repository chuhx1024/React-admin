import { configureStore } from '@reduxjs/toolkit'
import appReducer from './modules/appSlice/index'
import userReducer from './modules/userSlice/index'

const store = configureStore({
    reducer: {
        user: userReducer,
        app: appReducer,
    },
})

export default store
