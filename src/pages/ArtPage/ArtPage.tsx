import { Button, Typography } from '@mui/material'
import Rewievs from 'components/Reviews/Rewievs'

type Props = {}
const ArtPage = (props: Props) => {
  return (
      <div>
          ArtPage
          <Typography
              variant="h4"
              component={'h2'}
              sx={{
                  margin: '50px 0',
              }}
          >
              {' '}
              Page1 {' '}
          </Typography>
          <Button> Art Page 1</Button>
          <div>
              {' '}
              1111111 222222
              <div>lijhukjlkmkl</div>
      </div>
      <Rewievs/>
      </div>
  )
}
export default ArtPage