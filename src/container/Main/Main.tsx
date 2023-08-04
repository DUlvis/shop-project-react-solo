import Container from '@mui/material/Container'
import AboutPage from 'pages/AboutPage/AboutPage'
import CartPage from 'pages/CartPage/CartPage'
import Home from 'pages/Home/Home'
import PaymentPage from 'pages/PaymentPage/PaymentPage'
import ShippingPage from 'pages/ShippingPage/ShippingPage'
import { Route, Routes } from 'react-router-dom'

const Main = () => {
    return (
        <Container
            maxWidth="lg"
            sx={{
                padding: '50px 0',
            }}
            component="main"
        >
            <Routes>
                <Route path="/shop-project-react-solo/" element={<Home />} />
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
                    element={<CartPage />}
                />
            </Routes>
        </Container>
    )
}

export default Main
