import { Typography } from '@mui/material'
import Footer from 'container/Footer/Footer'

type Props = {}
const About = (props: Props) => {
  return (
      <div>
          <Typography
              variant="h4"
              component={'h2'}
              sx={{
                  margin: '50px 0',
              }}
          >
              {' '}
              About{' '}
          </Typography>
          <Footer/>
          
      </div>
  )
}
export default About
