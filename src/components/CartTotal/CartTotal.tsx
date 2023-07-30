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

const CartTotal = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    return (
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
    )
}

export default CartTotal
