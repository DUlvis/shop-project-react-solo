import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import { StyledEngineProvider } from '@mui/material/styles'

type Props = {}
const App = (props: Props) => {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <Header />
            </StyledEngineProvider>
        </>
    )
}
export default App
