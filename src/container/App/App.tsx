import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import { StyledEngineProvider } from '@mui/material/styles'
import Main from 'container/Main/Main'
import { useState } from 'react'

type Props = {}
type ArtLikeState = {
    [id: number]: boolean
}
const App = (props: Props) => {

    const [artLikeState, setArtLikeState] = useState<ArtLikeState>({
        1: true,
        2: true
    })
    const toogleLikeState = (id: number) => {
        setArtLikeState((prevState: ArtLikeState) => ({
            ...prevState,
            [id]: !prevState[id],
            isLike: !prevState[id]
        }))
    }
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />
            <Main
                artLikeState={artLikeState}
                toogleLikeState={toogleLikeState}
            />
        </StyledEngineProvider>
    )
}
export default App
