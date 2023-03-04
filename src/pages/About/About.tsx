import sk3 from 'assets/about.jpg'
import Card from '@mui/joy/Card'
import CardCover from '@mui/joy/CardCover'
import CardContent from '@mui/joy/CardContent'
import Typography from '@mui/joy/Typography'
import Footer from 'container/Footer/Footer'
import { useEffect } from 'react'

type Props = {}
const About = (props: Props) => {
     useEffect(() => window.scrollTo(0, 100), [])
  return (
      <div>
          <Typography
              level="h4"
              component={'h2'}
              fontSize={36}
              fontWeight="bold"
              sx={{
                  margin: '30px 0',
              }}
          >
              {' '}
              About{' '}
          </Typography>

          <Card
              component="li"
              sx={{ minWidth: 500, minHeight: 800, flexGrow: 1 }}
          >
              <CardCover>
                  <img src={sk3} alt="" />
              </CardCover>
              <CardContent>
                  <Typography
                      level="h6"
                      fontWeight="lg"
                      textColor="#fff"
                      mt={{ xs: 12, sm: 78 }}
                  >
                      Thank you for checking out our blog website.
                  </Typography>
              </CardContent>
          </Card>

          <Footer />
      </div>
  )
}
export default About
