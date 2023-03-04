import { Typography } from '@mui/material'
import Rewievs from 'components/Reviews/Rewievs'
import { useEffect } from 'react'
import BasicV from './BasicV'


type Props = {}
const ArtPage = (props: Props) => {
    useEffect(() => window.scrollTo(0, 100), [])
  return (
      <div>
          <Typography
              variant="h4"
              component={'h2'}
              fontWeight='bold'
              sx={{
                  margin: '50px 0',
              }}
          >
              {' '}
              Asia {' '}
          </Typography>

<BasicV/>

      <Rewievs/>
      </div>
  )
}
export default ArtPage