// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'



// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './styles.css'

// import required modules
//import { Pagination, Navigation } from 'swiper'

// Import Swiper styles
//import 'swiper/css'
// import 'swiper/scss'
// import 'swiper/scss/navigation'
// import 'swiper/scss/pagination'

import sl11 from 'assets/sl11.jpg'

type Props = {}
const Slider = (props: Props) => {
    return (
        <Swiper
            pagination={{
                type: 'fraction',
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
    )
}
export default Slider
