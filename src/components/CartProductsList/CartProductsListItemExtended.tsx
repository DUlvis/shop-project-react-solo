import { Button, Card, CardContent, Grid } from '@mui/material'
import { ProductProps } from 'utils/productsArray'
import './CartProductsListItemExtended.scss'
import DeleteIcon from '@mui/icons-material/Delete'

type Props = {
    productCount: number
    product: ProductProps
    removeProductFromCart: (id: number) => void
}

const CartProductsListItemExtended = ({
    product,
    productCount,
    removeProductFromCart,
}: Props) => {
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
                    <Button
                        variant="outlined"
                        onClick={() => removeProductFromCart(product.id)}
                    >
                        <DeleteIcon />
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}
export default CartProductsListItemExtended
