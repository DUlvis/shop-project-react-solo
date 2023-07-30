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

const CartProductsList = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    return (
        <div>
            {Object.keys(productsInCart).map((productId) => (
                <div key={productId}>
                    {productsObject[parseInt(productId)].title}:
                    {productsInCart[parseInt(productId)]}
                </div>
            ))}
        </div>
    )
}
export default CartProductsList
