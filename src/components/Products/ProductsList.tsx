import { Grid } from '@mui/material'
import ProductsListItem from './ProductsListItem'
import { useAppSelector } from 'redux/hooks'

type ProductProps = {
    id: number
    title: string
    desc: string
    type: string
    capacity: string
    price: number
    image: string
}

const ProductsList = () => {
    const productsArray = useAppSelector((state) => state.products)

    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                spacing={4}
            >
                {productsArray.map(
                    ({
                        id,
                        title,
                        desc,
                        type,
                        capacity,
                        price,
                        image,
                    }: ProductProps) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <ProductsListItem
                                id={id}
                                title={title}
                                desc={desc}
                                type={type}
                                capacity={capacity}
                                price={price}
                                image={image}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}

export default ProductsList
