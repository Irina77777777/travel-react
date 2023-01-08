import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import Home from 'components/Home/Home'

type Props = {}
const App = (props: Props) => {
    return (
        <>
            <CssBaseline />
            <Header />
            <Home />
        </>
    )
}
export default App
