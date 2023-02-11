// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './styles.css'

import sl11 from 'assets/sl11.jpg'
import sl12 from 'assets/sl12.jpg'
import sl13 from 'assets/sl13.jpg'
import sl14 from 'assets/sl14.jpg'
import sl15 from 'assets/sl15.jpg'
import sl16 from 'assets/sl16.jpg'
import sl17 from 'assets/sl17.jpg'
import sl18 from 'assets/sl18.jpg'
import sl19 from 'assets/sl19.jpg'
//import sl11 from 'assets/sl11.jpg'

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
            <SwiperSlide>
                <img src={sl11} alt="slide-1"  />
            </SwiperSlide>
            <SwiperSlide>
                <img src={sl12} alt="slide-2" />
            </SwiperSlide>
            <SwiperSlide>
                {' '}
                <img src={sl13} alt="slide-3" />
            </SwiperSlide>
            <SwiperSlide>
                {' '}
                <img src={sl14} alt="slide-4" />
            </SwiperSlide>
            <SwiperSlide>
                {' '}
                <img src={sl15} alt="slide-5" />
            </SwiperSlide>
            <SwiperSlide>
                {' '}
                <img src={sl16} alt="slide-6" />
            </SwiperSlide>
            <SwiperSlide>
                {' '}
                <img src={sl17} alt="slide-7" />
            </SwiperSlide>
            <SwiperSlide>
                {' '}
                <img src={sl18} alt="slide-8" />
            </SwiperSlide>
            <SwiperSlide>
                {' '}
                <img src={sl19} alt="slide-9" />
            </SwiperSlide>
        </Swiper>
    )
}
export default Slider
