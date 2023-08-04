import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

type Product = {
    id: number
    title: string
    desc: string
    type: string
    capacity: string
    price: number
    image: string
}

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const response = await axios.get(
            'https://run.mocky.io/v3/2df1f018-a13c-4752-a64f-a583cf6d4111'
        )
        
        return response.data.products
    }
)

const initialState: Product[] = []

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchProducts.fulfilled, (state,action) => {
            return state = action.payload
        }) 
    },
})

export default productSlice.reducer
