import Typography from '@mui/material/Typography'
import ProductsList from 'components/Products/ProductsList'
import Reviews from 'components/Reviews/Reviews'

type Props = {
    addProductToCart: (id: number, count: number) => void
    productsLikeState: { [id: number]: boolean }
    toggleLikeState: (id: number) => void
}

const Home = ({
    addProductToCart,
    productsLikeState,
    toggleLikeState,
}: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                component="h1"
                align="center"
                sx={{
                    marginBottom: '30px',
                }}
            >
                List of products
            </Typography>
            <ProductsList
                addProductToCart={addProductToCart}
                productsLikeState={productsLikeState}
                toggleLikeState={toggleLikeState}
            />
            <Reviews />
        </>
    )
}

export default Home
