import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { type UserState, type Project } from './types'

const userSlice = createSlice({
    name: 'user',
    initialState: (): UserState => ({
        user_id: '',
        username: '',
        currentProject: { id: '', name: '', alias: '', creator: '' },
    }),
    reducers: {
        setCurrentProject(state, action: PayloadAction<Project>) {
            state.currentProject = action.payload
        },
    },
})

export const { setCurrentProject } = userSlice.actions

export default userSlice.reducer
