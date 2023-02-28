import Box from '@mui/joy/Box'
//@ts-ignore
import sk3 from 'assets/Oscar.jpg'
import Card from '@mui/joy/Card'
import CardCover from '@mui/joy/CardCover'
import CardContent from '@mui/joy/CardContent'
import Typography from '@mui/joy/Typography'
//@ts-ignore
import vid from 'assets/video22.mp4'
import Rewievs from 'components/Reviews/Rewievs'





const ArtPage3 = () => {
    return (
        <>
            <Typography
                level="h4"
                component={'h2'}
                fontWeight="bold"
                fontSize={36}
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
                            mt={{ xs: 12, sm: 78 }}
                        >
                            Welcome to Spain
                        </Typography>
                    </CardContent>
                </Card>

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
                    remember in the jungle there’s a lot of they in there, after
                    you overcome they, you will make it to paradise. Egg whites,
                    turkey sausage, wheat toast, water. Of course they don’t
                    want us to eat our breakfast, so we are going to enjoy our
                    breakfast. Watch your back, but more importantly when you
                    get out the shower, dry your back, it’s a cold world out
                    there. To succeed you must believe. When you believe, you
                    will succeed. You should never complain, complaining is a
                    weak emotion, you got life, we breathing, we blessed.
                    Surround yourself with angels. They never said winning was
                    easy. Some people can’t handle success, I can. Look at the
                    sunset, life is amazing, life is beautiful, life is what you
                    make it. Life is what you make it, so let’s make it. You
                    should never complain, complaining is a weak emotion, you
                    got life, we breathing, we blessed.
                </p>
                <p>
                    They never said winning was easy. Some people can’t handle
                    success, I can. You see the hedges, how I got it shaped up?
                    It’s important to shape up your hedges, it’s like getting a
                    haircut, stay fresh. I told you all this before, when you
                    have a swimming pool, do not use chlorine, use salt water,
                    the healing, salt water is the healing. Look at the sunset,
                    life is amazing, life is beautiful, life is what you make
                    it. Egg whites, turkey sausage, wheat toast, water. Of
                    course they don’t want us to eat our breakfast, so we are
                    going to enjoy our breakfast.
                </p>

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
                            mt={{ xs: 12, sm: 78 }}
                        >
                            Beautiful night
                        </Typography>
                    </CardContent>
                </Card>

                <p>
                    It took me twenty five years to get these plants, twenty
                    five years of blood sweat and tears, and I’m never giving
                    up, I’m just getting started. The other day the grass was
                    brown, now it’s green because I ain’t give up. Never
                    surrender.
                </p>

                <Box
                    component="ul"
                    sx={{
                        display: 'flex',
                        gap: 2,
                        flexWrap: 'wrap',
                        p: 0,
                        m: 0,
                    }}
                >
                    <Card
                        component="li"
                        sx={{ minWidth: 500, minHeight: 400, flexGrow: 1 }}
                    >
                        <CardCover>
                            <Typography
                                level="h6"
                                paddingBottom={50}
                                fontWeight="lg"
                                fontSize={34}
                                textAlign={'center'}
                                textColor="green"
                                mt={{ xs: 12, sm: 2 }}
                            >
                                Doing the best at this moment puts you in the
                                best place for the next moment!
                                <br />
                                <br />
                                Oprah Winfre
                            </Typography>
                        </CardCover>
                    </Card>
                    <Card component="li" sx={{ minWidth: 500, flexGrow: 1 }}>
                        <CardCover>
                            .
                            <h4>
                                Action is the foundational key to all success
                            </h4>
                            <p>
                                In life there will be road blocks but we will
                                over come it. Another one. Learning is cool, but
                                knowing is better, and I know the key to
                                success. The key to more success is to get a
                                massage once a week, very important, major key,
                                cloth talk.
                            </p>
                        </CardCover>
                    </Card>
                </Box>

                <Card
                    component="li"
                    sx={{ minWidth: 500, minHeight: 800, flexGrow: 1 }}
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
                            mt={{ xs: 12, sm: 78 }}
                        >
                            Home is the best
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
            <ul>
                <h3>
                    {' '}
                    Success is largely a matter of holding on after others have
                    let go!{' '}
                </h3>

                <li>A year from now you may wish you had started today.</li>
                <li>
                    The question isn’t who is going to let me; it’s who is going
                    to stop me.
                </li>
                <li>
                    {' '}
                    Success is the sum of small efforts, repeated day-in and
                    day-out.
                </li>
                <li>
                    {' '}
                    I find that the harder I work, the more luck I seem to have.
                </li>
                <li>
                    {' '}
                    Before anything else, preparation is the key to success.
                </li>
            </ul>
            <Rewievs />
        </>
    )
}
export default ArtPage3
