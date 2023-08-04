import { createSlice } from '@reduxjs/toolkit'

type ProductsInCart = {
    [id: number]: number
}

const initialState: ProductsInCart = {
    1: 3,
    2: 3,
}

const cartSlice = createSlice({
    name: 'productsInCart',
    initialState,
    reducers: {
        

    },
})

// export const {} = cartSlice.actions 

export default cartSlice.reducer
