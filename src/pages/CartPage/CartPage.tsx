import { Typography } from '@mui/material'
import productsArray, {
    getProductsObject,
    ProductProps,
} from 'utils/productsArray'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: ProductProps
    }
}

const CartPage = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
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
            <div>
                {Object.keys(productsInCart).map((productId) => (
                    <div key={productId}>
                        {productsObject[parseInt(productId)].title}:
                        {productsInCart[parseInt(productId)]}
                    </div>
                ))}
            </div>
            <div>
                Total:{' '}
                {Object.keys(productsInCart).reduce(
                    (total, productId) =>
                        total +
                        productsInCart[parseInt(productId)] *
                            productsObject[parseInt(productId)].price,
                    0
                )}
                $
            </div>
        </div>
    )
}

export default CartPage
