import { useParams } from 'react-router-dom'
import { useAppSelector } from 'redux/hooks'
import { getProductsObject, ProductProps } from 'utils/productsArray'

type Props = {}

type ProductsObjectProps = {
    [id: number]: ProductProps
}

const ProductPage = (props: Props) => {
    const { id } = useParams()

    const productsArray = useAppSelector((state) => state.products)
    const productsObject: ProductsObjectProps = getProductsObject(productsArray)

    return <div>{productsObject[parseInt(id!)].title}</div>
}
export default ProductPage
