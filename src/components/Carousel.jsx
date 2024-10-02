import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import "swiper/css/navigation";

const Carousel = () => {
  return (
    <div className='h-600[600px] bg-white' >
      <Swiper
        //       loop={true}
        //       spaceBetween={0}
        //        navigation={true}
        //        modules={[Navigation]}
        //        className='h-[50%]'> 

        modules={[Navigation, Pagination, Scrollbar, A11y]}
        loop={true}
        spaceBetween={0}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')} >


        <SwiperSlide>
          <img src={"../images/carousel1.jpg"} />
        </SwiperSlide>

        <SwiperSlide>
          <img src={"../images/carousel2.jpg"} />
        </SwiperSlide>

        <SwiperSlide>
          <img src={"../images/carousel3.jpg"} />
        </SwiperSlide>

        <SwiperSlide>
          <img src={"../images/carousel4.jpg"} />
        </SwiperSlide>

        <SwiperSlide>
          <img src={"../images/carousel5.jpg"} />
        </SwiperSlide>

        {/*       <SwiperSlide>
            <img src={"../images/carousel6.jpg"} />
           </SwiperSlide>   foto muy pequenña */}

        <SwiperSlide>
          <img src={"../images/carousel7.jpg"} />
        </SwiperSlide>

        <SwiperSlide>
          <img src={"../images/carousel8.jpg"} />
        </SwiperSlide>

        <SwiperSlide>
          <img src={"../images/carousel9.jpg"} />
        </SwiperSlide>

        <SwiperSlide>
          <img src={"../images/carousel10.jpg"} />
        </SwiperSlide>

        <SwiperSlide>
          <img src={"../images/carousel11.jpg"} />
        </SwiperSlide>

      </Swiper>
    </div >
  )
}

export default Carousel