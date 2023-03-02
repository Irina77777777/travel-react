import Box from '@mui/joy/Box'
import Card from '@mui/joy/Card'
import CardCover from '@mui/joy/CardCover'
import CardContent from '@mui/joy/CardContent'
import Typography from '@mui/joy/Typography'
import sl20 from 'assets/sl20.jpg'
import sl21 from "assets/sl21.jpg"

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
            <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
                <p>
                    Give thanks to the most high. You do know, you do know that
                    they don’t want you to have lunch. I’m keeping it real with
                    you, so what you going do is have lunch. Another one. Egg
                    whites, turkey sausage, wheat toast, water. Of course they
                    don’t want us to eat our breakfast.
                </p>
            </Card>

            <Box
                component="ul"
                sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
            >
                <Card
                    component="li"
                    sx={{ minWidth: 500, minHeight: 600, flexGrow: 1 }}
                >
                    <CardCover>
                        <img src={sl21} alt="" />
                    </CardCover>
                </Card>
                <Card component="li" sx={{ minWidth: 500, flexGrow: 1 }}>
                    <CardCover>
                        .<h4>Action is the foundational key to all success</h4>
                        <p>
                            In life there will be road blocks but we will over
                            come it. Another one. Learning is cool, but knowing
                            is better, and I know the key to success. The key to
                            more success is to get a massage once a week, very
                            important, major key, cloth talk. I told you all
                            this before, when you have a swimming pool, do not
                            use chlorine, use salt water, the healing, salt
                            water is the healing. I’m up to something. Life is
                            what you make it, so let’s make it. The other day
                            the grass was brown, now it’s green because I ain’t
                            give up. Never surrender.
                        </p>
                    </CardCover>
                </Card>
            </Box>
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
            <h3>Success is how high you bounce when you hit bottom</h3>
            <p>
                In life there will be road blocks but we will over come it.
                Another one. Learning is cool, but knowing is better, and I know
                the key to success. The key to more success is to get a massage
                once a week, very important, major key, cloth talk. I told you
                all this before, when you have a swimming pool, do not use
                chlorine, use salt water, the healing, salt water is the
                healing. I’m up to something. Life is what you make it, so let’s
                make it. The other day the grass was brown, now it’s green
                because I ain’t give up. Never surrender.
            </p>

            <Box
                component="ul"
                sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
            >
                <Card component="li" sx={{ minWidth: 500, flexGrow: 1 }}>
                    <CardCover>
                        .<h4>Action is the foundational key to all success</h4>
                        <p>
                            In life there will be road blocks but we will over
                            come it. Another one. Learning is cool, but knowing
                            is better, and I know the key to success. The key to
                            more success is to get a massage once a week, very
                            important, major key, cloth talk. I told you all
                            this before, when you have a swimming pool, do not
                            use chlorine, use salt water, the healing, salt
                            water is the healing. I’m up to something. Life is
                            what you make it, so let’s make it. The other day
                            the grass was brown, now it’s green because I ain’t
                            give up. Never surrender.
                        </p>
                    </CardCover>
                </Card>
                <Card
                    component="li"
                    sx={{ minWidth: 500, minHeight: 600, flexGrow: 1 }}
                >
                    <CardCover>
                        <img src={sl20} alt="" />
                    </CardCover>
                </Card>
            </Box>
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

            <Card
                component="div"
                sx={{ minWidth: 1200, minHeight: 200, background: 'black' }}
            >
                <CardContent>
                    <Typography
                        level="h6"
                        fontWeight="lg"
                        textColor="#fff"
                        mt={{ xs: 12, sm: 8 }}
                    >
                        Great things in business are never done by one person.
                        They’re done by a team of people.
                    </Typography>
                    <Typography
                        level="h6"
                        fontWeight="lg"
                        textColor="blue"
                        textAlign={'right'}
                        mt={{ xs: 12, sm: 8 }}
                    >
                        Steve Jobs
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
}
//export default BasicV
