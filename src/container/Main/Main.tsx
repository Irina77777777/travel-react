import { Container } from "@mui/material"
import About from "pages/About/About"
import Africa from "pages/Africa/Africa"
import Asia from "pages/Asia/Asia"
import Europe from "pages/Europe/Europe"
import Favorite from "pages/Favorite/Favorite"
import Home2 from "pages/Home2/Home2"
import {Routes, Route} from "react-router-dom"

type Props = {}
const Main = (props: Props) => {
    return (
        <Container
            maxWidth="lg"
            sx={{
                padding: '40px 0',
            }}
            component="main"
        >
            <Routes>
                <Route path="/" element={<Home2 />} />
                <Route path="Asia" element={<Asia />} />
                <Route path="Africa" element={<Africa />} />
                <Route path="europe" element={<Europe />} />
                <Route path="About" element={<About />} />
                <Route path="favorite" element={<Favorite />} />
            </Routes>
        </Container>
    )
}
export default Main