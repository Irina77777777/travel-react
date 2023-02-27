import Box from '@mui/joy/Box'
//@ts-ignore
import sk3 from 'assets/sk33.JPG'
import Card from '@mui/joy/Card'
import CardCover from '@mui/joy/CardCover'
import CardContent from '@mui/joy/CardContent'
import Typography from '@mui/joy/Typography'
//@ts-ignore
import vid from 'assets/video22.mp4'





const ArtPage3 = () => {
    return (
        <>
            <Typography
                level="h4"
                component={'h2'}
                sx={{
                    margin: '50px 0',
                }}
            >
                {' '}
                Europe{' '}
            </Typography>
            <Box
                component="ul"
                sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
            >
                <Card
                    component="li"
                    sx={{ minWidth: 1200, minHeight: 700, flexGrow: 1 }}
                >
                    <CardCover>
                        <video
                            autoPlay
                            loop
                            muted
                            poster="https://assets.codepen.io/6093409/river.jpg"
                        >
                            <source
                                src={vid}
                                // src="https://photos.app.goo.gl/8qevNub5q94u4TWY7 "
                                type="video/mp4"
                            />
                        </video>
                    </CardCover>
                    <CardContent>
                        <Typography
                            level="h6"
                            fontWeight="lg"
                            textColor="#fff"
                            mt={{ xs: 12, sm: 18 }}
                        >
                            Video
                        </Typography>
                    </CardContent>
                </Card>

                <Card
                    component="li"
                    sx={{ minWidth: 1200, minHeight: 600, flexGrow: 1 }}
                >
                    <CardCover>
                        <img
                            src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
                            srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
                            loading="lazy"
                            alt=""
                        />
                    </CardCover>
                    <CardContent>
                        <Typography
                            level="h6"
                            fontWeight="lg"
                            textColor="#fff"
                            mt={{ xs: 12, sm: 18 }}
                        >
                            Image
                        </Typography>
                    </CardContent>
                </Card>

                <Card
                    component="li"
                    sx={{ minWidth: 1200, minHeight: 600, flexGrow: 1 }}
                >
                    <CardCover>
                        <img
                            src={sk3}
                           // "https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
                            // srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
                            // loading="lazy"
                            // alt=""
                        />
                    </CardCover>
                    <CardContent>
                        <Typography
                            level="h6"
                            fontWeight="lg"
                            textColor="#fff"
                            mt={{ xs: 12, sm: 18 }}
                        >
                            Image
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </>
    )
}
export default ArtPage3
