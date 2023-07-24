import Container from '@mui/material/Container'
import Home from 'pages/Home/Home'

type Props = {
    addProductToCart: (id: number, count: number) => void
}

const Main = ({ addProductToCart }: Props) => {
    return (
        <Container
            maxWidth="lg"
            sx={{
                padding: '50px 0',
            }}
            component="main"
        >
            <Home addProductToCart={addProductToCart} />
        </Container>
    )
}

export default Main
