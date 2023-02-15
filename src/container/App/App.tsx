import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import Home from 'components/Home/Home'
import { StyledEngineProvider } from '@mui/material/styles'
import Main from 'container/Main/Main'

type Props = {}
const App = (props: Props) => {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />
            {/* <Home /> */}
            <Main />
        </StyledEngineProvider>
    )
}
export default App
