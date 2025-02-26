import { createSlice } from '@reduxjs/toolkit'
import type { AppState } from './types'

const appSlice = createSlice({
    name: 'app',
    initialState: (): AppState => ({
        collapsed: false,
    }),
    reducers: {
        toggleCollapsed: (state) => {
            state.collapsed = !state.collapsed
        },
    },
})

export const { toggleCollapsed } = appSlice.actions

export default appSlice.reducer
