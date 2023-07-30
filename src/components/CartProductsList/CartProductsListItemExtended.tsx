import { Card, CardContent, Grid } from '@mui/material'
import { ProductProps } from 'utils/productsArray'
import './CartProductsListItemExtended.scss'

type Props = {
    productCount: number
    product: ProductProps
}

const CartProductsListItemExtended = ({ product, productCount }: Props) => {
    return (
        <Grid item xs={12} sm={4}>
            <Card>
                <CardContent>
                    <div className="cart-img">
                        <img src={product.image} alt="" />
                    </div>
                    <div>{product.title}</div>
                    <p>Price for one item: {product.price}</p>
                    <p>Count: {productCount}</p>
                </CardContent>
            </Card>
        </Grid>
    )
}
export default CartProductsListItemExtended
