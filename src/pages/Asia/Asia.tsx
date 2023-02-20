import { Grid, Typography } from '@mui/material'
import ArticlesListItem from 'components/Articles/ArticlesListItem'
import articlesArray from 'utils/articlesArray'


type ArticlesProps = {
    id: number
    title: string
    desc: string
    local: string
    man: string
    image: string
}
type Props = {
    toogleLikeState: (id: number) => void
    artLikeState: {
        [id: number]: boolean
    }
}

const Asia = ({ artLikeState, toogleLikeState }: Props) => {
    return (
        <>
            <Typography
                variant="h4"
                component={'h2'}
                sx={{
                    margin: '50px 0',
                }}
            >
                {' '}
                Asia{' '}
            </Typography>
            <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                spacing={4}
            >
                {articlesArray
                    .filter(({ local }: ArticlesProps) => local === 'Asia')
                    .map(
                        ({
                            id,
                            title,
                            desc,
                            local,
                            man,
                            image,
                        }: ArticlesProps) => (
                            <Grid item xs={12} sm={6} md={4} key={id}>
                                <ArticlesListItem
                                    id={id}
                                    title={title}
                                    desc={desc}
                                    local={local}
                                    man={man}
                                    image={image}
                                    toogleLikeState={toogleLikeState}
                                    isLiked={artLikeState[id]}
                                />
                            </Grid>
                        )
                    )}
            </Grid>
        </>
    )
}
export default Asia
