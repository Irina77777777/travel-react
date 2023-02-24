import Box from '@mui/joy/Box'
import Card from '@mui/joy/Card'
import CardCover from '@mui/joy/CardCover'
import CardContent from '@mui/joy/CardContent'
import Typography from '@mui/joy/Typography'

//type Props = {}
export default function BasicV() {
    return (
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
                            src="https://assets.codepen.io/6093409/river.mp4"
                            type="video/mp4"
                        />
                    </video>
                </CardCover>
                <CardContent>
                    <Typography
                        level="h6"
                        fontWeight="lg"
                        textColor="#fff"
                        mt={{ xs: 12, sm: 78 }}
                    >
                        Sutherland Falls in New Zealand
                    </Typography>
                </CardContent>
            </Card>

            <Typography
                level="h4"
                fontWeight="lg"
                fontSize={58}
                sx={{
                    margin: '20px 0',
                }}
            >
                How to Find the Cheapest Flight to Asia
            </Typography>

            <Typography
                level="h2"
                fontWeight="lg"
                fontSize={38}
                sx={{
                    margin: '10px 0',
                }}
            >
                Don’t wait. The time will never be just right!
            </Typography>

            <p>
                The key to more success is to have a lot of pillows. Always
                remember in the jungle there’s a lot of they in there, after you
                overcome they, you will make it to paradise. Egg whites, turkey
                sausage, wheat toast, water. Of course they don’t want us to eat
                our breakfast, so we are going to enjoy our breakfast. Watch
                your back, but more importantly when you get out the shower, dry
                your back, it’s a cold world out there. To succeed you must
                believe. When you believe, you will succeed. You should never
                complain, complaining is a weak emotion, you got life, we
                breathing, we blessed. Surround yourself with angels. They never
                said winning was easy. Some people can’t handle success, I can.
                Look at the sunset, life is amazing, life is beautiful, life is
                what you make it. Life is what you make it, so let’s make it.
                You should never complain, complaining is a weak emotion, you
                got life, we breathing, we blessed.
            </p>

            <Typography
                level="h2"
                fontWeight="lg"
                fontSize={48}
                textColor="blue"
                textAlign={'center'}
                sx={{
                    margin: '15px 0',
                }}
            >
                Great things in business are never done by one person. They’re
                done by a team of people.
            </Typography>
            <Typography
                level="h2"
                fontWeight="lg"
                fontSize={28}
                textColor="blue"
                textAlign={'center'}
                sx={{
                    margin: '5px 400px',
                }}
            >
                Steve Jobs
            </Typography>

            <Card
                component="li"
                sx={{ minWidth: 1200, minHeight: 700, flexGrow: 1 }}
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
                        mt={{ xs: 12, sm: 78 }}
                    >
                        Kala Patthar The most beautiful outlook of the world
                    </Typography>
                </CardContent>
            </Card>


            

            <Card
                component="li"
                sx={{ minWidth: 300, flexGrow: 1 }}
            >
                <p>
                    Give thanks to the most high. You do know, you do know that
                    they don’t want you to have lunch. I’m keeping it real with
                    you, so what you going do is have lunch. Another one. Egg
                    whites, turkey sausage, wheat toast, water. Of course they
                    don’t want us to eat our breakfast.
                </p>
            </Card>
            <Card
                component="li"
                color='danger'
                sx={{ minWidth: 300, flexGrow: 1 }}
            >
                <p>
                    Doing the best at this moment puts you in the best place for
                    the next moment!
                </p>
            </Card>
        </Box>
    )
}
//export default BasicV
