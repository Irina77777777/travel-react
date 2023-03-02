import { Card, CardActions, CardContent, Button } from "@mui/material"
import './ArticlesListItem.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { Link } from "react-router-dom"

type Props = {
    id: number
    title: string
    desc: string
    local: string
    man: string
    image: string
    isLiked: boolean
    toogleLikeState: (id: number) => void
}
const ArticlesListItem = ({
    id,
    title,
    desc,
    local,
    man,
    image,
    isLiked = false,
    toogleLikeState,
}: Props) => {
    return (
        <Card className="artic" variant="outlined">
            <CardContent>
                <Button variant="outlined" onClick={() => toogleLikeState(id)}>
                    {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </Button>
                <div className="artic-img">
                    <img src={image} alt="" />
                </div>
                <div className="artic-title">
                    {' '}
                    <Link to={`/articles/${id}`}> {title}</Link>
                </div>
                <p className="artic-desc">{desc}</p>
                <div className="artic-local">
                    <span>Location:</span> {local}
                </div>
                <div className="artic-man">{man}</div>
            </CardContent>
            <CardActions className="btn-wrap">
                <Button variant="outlined">
                    <Link to={`/articles/${id}`}> See more</Link>
                </Button>
            </CardActions>
        </Card>
    )
}
export default ArticlesListItem