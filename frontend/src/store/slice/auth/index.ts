import { createSlice } from "@reduxjs/toolkit"
import { IAuthState } from "@src/common/types/auth"

const initialState: IAuthState = {
    user: {
        id: null,
        firstName: '',
        username: '',
        email: '',
        createdAt: '',
        updateAt: '',
        watchlist: [
            {
                id: null,
                assetId: '',
                name: '',
                updateAt: '',
                createdAt: '',
                user: null
            }
        ]
    },
    isLogged: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            state.user = action.payload
            state.isLogged = true
        }
    }
})

export const {login} = authSlice.actions
export default authSlice.reducer