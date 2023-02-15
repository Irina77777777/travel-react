import { Container } from '@mui/material'
import ArticlesList from 'components/Articles/ArticlesList'
import Slider from 'components/Slider/Slider'

type Props = {}
const Home2 = (props: Props) => {
    return (
      <>
        <Container maxWidth="lg">
          <Slider/>
          </Container>
            <ArticlesList />
        </>
    )
}
export default Home2
