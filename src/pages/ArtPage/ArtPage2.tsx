import { Typography } from '@mui/material'
import Rewievs from 'components/Reviews/Rewievs'
import Card from '@mui/joy/Card'
import CardCover from '@mui/joy/CardCover'
//@ts-ignore
import vid from 'assets/video11.mp4'

type Props = {}
const ArtPage2 = (props: Props) => {
    return (
        <div>
            ArtPage2
            <Typography
                variant="h4"
                component={'h2'}
                fontWeight="bold"
                sx={{
                    margin: '50px 0',
                }}
            >
                {' '}
                Africa{' '}
            </Typography>
            <Card sx={{ minWidth: 1200, minHeight: 700 }}>
                <CardCover>
                    <video
                        autoPlay
                        loop
                        muted
                        poster="https://assets.codepen.io/6093409/river.jpg"
                    >
                        <source
                            src={vid}
                            //https://assets.codepen.io/6093409/river.mp4"
                            type="video/mp4"
                        />
                    </video>
                </CardCover>
            </Card>
            <div> 222222</div>
            <Rewievs />
        </div>
    )
}
export default ArtPage2
