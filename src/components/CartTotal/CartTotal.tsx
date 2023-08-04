import { useAppSelector } from 'redux/hooks'
import { getProductsObject, ProductProps } from 'utils/productsArray'

type Props = {
    productsInCart: {
        [id: number]: number
    }
}
type ProductsObjectProps = {
    [id: number]: ProductProps
}

const CartTotal = ({ productsInCart }: Props) => {
    const productsArray = useAppSelector((state) => state.products)
    const productsObject: ProductsObjectProps = getProductsObject(productsArray)

    if (productsArray.length === 0) {
        return null
    } else {
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
}

export default CartTotal
