import Container from '@mui/material/Container'
import Home from 'pages/Home/Home'

type Props = {}

const Main = (props: Props) => {
    return (
        <Container
            maxWidth="lg"
            sx={{
                padding: '50px 0',
            }}
            component="main"
        >
            <Home />
        </Container>
    )
}

export default Main
