import { Typography } from '@mui/material'
import Rewievs from 'components/Reviews/Rewievs'

type Props = {}
const ArtPage2 = (props: Props) => {
    return (
        <div>
            ArtPage2
            <Typography
                variant="h4"
                component={'h2'}
                sx={{
                    margin: '50px 0',
                }}
            >
                {' '}
                ArtPage2{' '}
            </Typography>
            <div> 11111</div>
        <div> 222222</div>
        <Rewievs/>
        </div>
    )
}
export default ArtPage2
