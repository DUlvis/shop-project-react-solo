import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import { StyledEngineProvider } from '@mui/material/styles'
import Main from 'container/Main/Main'
import { useState } from 'react'
import { omit } from 'lodash'

type ProductsInCart = {
    [id: number]: number
}

const App = () => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCart>({
        1: 5,
        2: 1,
    })

    const addProductToCart = (id: number, count: number) => {
        setProductsInCart((prevState: ProductsInCart) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }
    const removeProductFromCart = (id: number) =>
        setProductsInCart((prevState: ProductsInCart) => omit(prevState, [id]))

    const changeProductQuantity = (id: number, count: number) =>
        setProductsInCart((prevState: ProductsInCart) => ({
            ...prevState,
            [id]: count,
        }))

    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Header productsInCart={productsInCart} />
                <Main
                    addProductToCart={addProductToCart}
                    productsInCart={productsInCart}
                    removeProductFromCart={removeProductFromCart}
                    changeProductQuantity={changeProductQuantity}
                />
            </StyledEngineProvider>
        </>
    )
}
export default App
