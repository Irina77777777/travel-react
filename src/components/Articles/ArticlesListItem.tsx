import { Card, CardActions, CardContent, Button } from "@mui/material"
import './ArticlesListItem.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'

type Props = {
    title: string
    desc: string
    local: string
    man: string
    image: string
    isLiked?: boolean
}
const ArticlesListItem = ({ title, desc, local, man, image, isLiked=false }: Props) => {
  return (
      <Card className="artic" variant="outlined">
          <CardContent>
              <Button variant="outlined">
                  {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </Button>
              <div className="artic-img">
                  <img src={image} alt="" />
              </div>
              <div className="artic-title"> {title}</div>
              <p className="artic-desc">{desc}</p>
              <div className="artic-local">
                  <span>Location:</span> {local}
              </div>
              <div className="artic-man">
                  {man}
                  {/* Alex Birzul   Jan 23, 2022 */}
              </div>
          </CardContent>
          <CardActions className="btn-wrap">
              <Button variant="outlined"> See more</Button>
          </CardActions>
      </Card>
  )
}
export default ArticlesListItem