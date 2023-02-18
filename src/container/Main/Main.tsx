import { Container } from "@mui/material"
import About from "pages/About/About"
import Africa from "pages/Africa/Africa"
import ArtPage from "pages/ArtPage/ArtPage"
import ArtPage2 from "pages/ArtPage/ArtPage2"
import Asia from "pages/Asia/Asia"
import Europe from "pages/Europe/Europe"
import Favorite from "pages/Favorite/Favorite"
import Home2 from "pages/Home2/Home2"
import {Routes, Route} from "react-router-dom"

type Props = {
    toogleLikeState:(id: number) => void
    artLikeState: {
        [id: number]: boolean
    }
}
const Main = ({artLikeState, toogleLikeState}: Props) => {
    return (
        <Container
            maxWidth="lg"
            sx={{
                padding: '40px 0',
            }}
            component="main"
        >
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home2
                            artLikeState={artLikeState}
                            toogleLikeState={toogleLikeState}
                        />
                    }
                />
                <Route
                    path="Asia"
                    element={
                        <Asia
                            artLikeState={artLikeState}
                            toogleLikeState={toogleLikeState}
                        />
                    }
                />
                <Route
                    path="Africa"
                    element={
                        <Africa
                            artLikeState={artLikeState}
                            toogleLikeState={toogleLikeState}
                        />
                    }
                />
                <Route
                    path="europe"
                    element={
                        <Europe
                            artLikeState={artLikeState}
                            toogleLikeState={toogleLikeState}
                        />
                    }
                />
                <Route path="About" element={<About />} />
                <Route
                    path="favorite"
                    element={
                        <Favorite
                            artLikeState={artLikeState}
                            toogleLikeState={toogleLikeState}
                        />
                    }
                />
                <Route path="articles/:id" element={<ArtPage />} />
                <Route path="articles/2" element={<ArtPage2/>} />
            </Routes>
        </Container>
    )
}
export default Main