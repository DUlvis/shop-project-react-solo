import { Typography } from '@mui/material'
import CartProductsList from 'components/CartProductsList/CartProductsList'
import CartTotal from 'components/CartTotal/CartTotal'

type Props = {
    productsInCart: {
        [id: number]: number
    }
}

const CartPage = ({ productsInCart }: Props) => {
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
            <CartProductsList productsInCart={productsInCart} />
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}

export default CartPage
