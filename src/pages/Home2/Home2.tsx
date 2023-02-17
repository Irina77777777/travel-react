import { Container } from '@mui/material'
import ArticlesList from 'components/Articles/ArticlesList'
import Slider from 'components/Slider/Slider'

type Props = {
    toogleLikeState: (id: number) => void
    artLikeState: {
        [id: number]: boolean
    }
}
const Home2 = ({artLikeState, toogleLikeState}: Props) => {
    return (
        <>
            <Container maxWidth="lg">
                <Slider />
            </Container>
            <ArticlesList
                artLikeState={artLikeState}
                toogleLikeState={toogleLikeState}
            />
        </>
    )
}
export default Home2
