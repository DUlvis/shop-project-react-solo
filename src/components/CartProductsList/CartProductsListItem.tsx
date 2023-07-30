import { ProductProps } from 'utils/productsArray'

type Props = {
    productCount: number
    product: ProductProps
}

const CartProductsListItem = ({ product, productCount }: Props) => {
    return (
        <div>
            {product.title}:{productCount}
        </div>
    )
}
export default CartProductsListItem
