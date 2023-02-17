import { Grid } from "@mui/material"
import articlesArray from "utils/articlesArray"
import ArticlesListItem from "./ArticlesListItem"

type Props = {
    toogleLikeState: (id: number) => void
    artLikeState: {
        [id: number]: boolean
    }
}
type ArticlesProps = {
    id: number
    title: string
    desc: string
    local: string
    man: string
    image: string
}
const ArticlesList = ({artLikeState, toogleLikeState}: Props) => {
  return (
      <>
          <Grid
              container
              direction="row"
              justifyContent="space-around"
              alignItems="center"
              spacing={4}
          >
              {articlesArray.map(
                  ({ id, title, desc, local, man, image }: ArticlesProps) => (
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
export default ArticlesList