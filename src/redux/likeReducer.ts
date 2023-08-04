import { createSlice } from '@reduxjs/toolkit'

type LikeProducts = {
    [id: number]: boolean
}

const initialState: LikeProducts = {
    1: true,
    2: true,
}

const likeSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {
        toggleLikeState: (prevState,action) => ({
            ...prevState,
            [action.payload]: !prevState[action.payload]
        })

    },
})

export const {toggleLikeState} = likeSlice.actions

export default likeSlice.reducer
