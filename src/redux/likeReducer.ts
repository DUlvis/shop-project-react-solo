import { createSlice } from '@reduxjs/toolkit'

type LikeProducts = {
    [id: number]: boolean
}

export const initialState: LikeProducts = {
    1: true,
    2: true,
}

export const likeSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {},
})

export default likeSlice.reducer
