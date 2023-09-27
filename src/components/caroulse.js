import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';

class caroulse extends React.Component {
    state={
        images:["https://lh3.googleusercontent.com/pw/AIL4fc9U6nxB-ZP8UmpeOiO6RK6SwgCV8wbTd6Xi6hB2R2DwCSTB3qW5J1h-n_X5ftdvJ-pp6lS9-uBkhYlr4hvTLSYhXxz9lCGMXmgXh4L9RBXmezdjdspJ_ZiYwhYo5vSjxperb7ZmIwNLgtpuYsUiS3M=w1366-h384-s-no?authuser=0",
                "https://th.bing.com/th/id/OIP.1YM53mG10H_U25iPjop83QHaEo?pid=ImgDet&rs=1"],
    };
    render() {
        return (
            <>
                <Swiper navigation={true} modules={[Navigation,Autoplay]} loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                 className="mySwiper w-full h-2/4 ">
                    {
                        this.state.images.map(image=>
                            <SwiperSlide><img src={image} alt="" className="w-full h-full max-h-96"/></SwiperSlide>
                        )
                    }
                    
                </Swiper>
            </>
        );
    }
}

export default caroulse;