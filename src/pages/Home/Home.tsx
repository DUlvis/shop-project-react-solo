import Typography from '@mui/material/Typography'
import ProductsList from 'components/Products/ProductsList'
import Reviews from 'components/Reviews/Reviews'

type Props = {
    addProductToCart: (id: number, count: number) => void
}

const Home = ({ addProductToCart }: Props) => {
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
            <ProductsList addProductToCart={addProductToCart} />
            <Reviews />
        </>
    )
}

export default Home
