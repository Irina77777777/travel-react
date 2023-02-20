import { Typography } from '@mui/material'

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
          
      </div>
  )
}
export default About
