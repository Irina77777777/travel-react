

//import slider from './Slider'

import Slider from "components/Slider/Slider"
import { Container } from "@mui/material"

type Props = {}
const Home = (props: Props) => {
    return (
        <Container maxWidth="lg">
            <Slider />
        </Container>
        //slider
    ) 
}
export default Home