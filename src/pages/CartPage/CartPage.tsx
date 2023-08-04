import { Typography, Grid } from '@mui/material'
import CartProductsList from 'components/CartProductsList/CartProductsList'
import CartProductsListItemExtended from 'components/CartProductsList/CartProductsListItemExtended'
import CartTotal from 'components/CartTotal/CartTotal'
import { Link } from 'react-router-dom'
import { useAppSelector } from 'redux/hooks'

const CartPage = () => {
    const productsInCart = useAppSelector((state) => state.productsInCart)

    return (
        <div>
            <Typography
                variant="h4"
                component="h1"
                sx={{
                    marginBottom: '30px',
                }}
            >
                Cart
            </Typography>
            <Grid container spacing={4}>
                <CartProductsList
                    productsInCart={productsInCart}
                    CartItem={CartProductsListItemExtended}
                />
            </Grid>

            <CartTotal productsInCart={productsInCart} />
            <Link to="/checkout">Proceed to checkout</Link>
        </div>
    )
}

export default CartPage
