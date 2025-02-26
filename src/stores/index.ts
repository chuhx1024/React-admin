import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
// import localforage from 'localforage' // 使用 IndexedDB 作为 storage 需要安装 yarn add localforage
import storage from 'redux-persist/lib/storage' // 使用 localStorage 作为 storage

import appReducer from './modules/appSlice/index'
import userReducer from './modules/userSlice/index'

const store = configureStore({
    reducer: {
        user: persistReducer({ key: 'user', storage }, userReducer),
        app: persistReducer({ key: 'app', storage }, appReducer),
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST'],
            },
        }),
})

// 创建 persistor
const persistor = persistStore(store)

export { store, persistor }
