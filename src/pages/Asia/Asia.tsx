import { Grid } from '@mui/material'
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

const Asia = () => {
  
   return (
       <>
           <Grid
               container
               direction="row"
               justifyContent="space-around"
               alignItems="center"
               spacing={4}
           >
         {articlesArray.filter(({local}:ArticlesProps ) => local === "Asia")
           .map(
                   ({ id, title, desc, local, man, image }: ArticlesProps) => (
                       <Grid item xs={12} sm={6} md={4} key={id}>
                           <ArticlesListItem
                               title={title}
                               desc={desc}
                               local={local}
                               man={man}
                               image={image}
                           />
                       </Grid>
                   )
               )}
           </Grid>
       </>
   )
}
export default Asia
