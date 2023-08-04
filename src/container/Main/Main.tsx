import Container from '@mui/material/Container'
import AboutPage from 'pages/AboutPage/AboutPage'
import CartPage from 'pages/CartPage/CartPage'
import Home from 'pages/Home/Home'
import PaymentPage from 'pages/PaymentPage/PaymentPage'
import ShippingPage from 'pages/ShippingPage/ShippingPage'
import { Route, Routes } from 'react-router-dom'

type Props = {
    addProductToCart: (id: number, count: number) => void
    productsInCart: { [id: number]: number }
    removeProductFromCart: (id: number) => void
    changeProductQuantity: (id: number, count: number) => void
}

const Main = ({
    addProductToCart,
    productsInCart,
    removeProductFromCart,
    changeProductQuantity,
}: Props) => {
    return (
        <Container
            maxWidth="lg"
            sx={{
                padding: '50px 0',
            }}
            component="main"
        >
            <Routes>
                <Route
                    path="/shop-project-react-solo/"
                    element={<Home addProductToCart={addProductToCart} />}
                />
                <Route
                    path="shop-project-react-solo/about"
                    element={<AboutPage />}
                />
                <Route
                    path="shop-project-react-solo/shipping"
                    element={<ShippingPage />}
                />
                <Route
                    path="shop-project-react-solo/payment"
                    element={<PaymentPage />}
                />
                <Route
                    path="shop-project-react-solo/cart"
                    element={
                        <CartPage
                            removeProductFromCart={removeProductFromCart}
                            changeProductQuantity={changeProductQuantity}
                        />
                    }
                />
            </Routes>
        </Container>
    )
}

export default Main
