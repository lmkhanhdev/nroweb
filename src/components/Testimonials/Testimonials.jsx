import React from 'react'
import Slider from 'react-slick'

import menuImg from '../../assets/images/NapThe.png'
import menuImg02 from '../../assets/images/TaiKhoan.png'
import menuImg03 from '../../assets/images/DichVu.png'
import menuImg04 from '../../assets/images/NickRandom.png'


const Testimonials = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,

        responsive:[
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    }

  return (
        <Slider { ...settings}>
            <div className='testimonial py-4 px-4'>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={menuImg} className="w-50 h-50 rounded-4" alt="" />
                    <div>
                        <h1 style={{fontSize: '20px', fontWeigth: '500', fontStyle: 'italic', color: '#fff'}}>Nạp Thẻ</h1>
                    </div>
                </div>
            </div>

            <div className='testimonial py-4 px-4'>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={menuImg02} className="w-50 h-50 rounded-4" alt="" />
                    <div>
                        <h1 style={{fontSize: '20px', fontWeigth: '500', fontStyle: 'italic', color: '#fff'}}>Tài Khoản</h1>
                    </div>
                </div>
            </div>

            <div className='testimonial py-4 px-4'>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={menuImg03} className="w-50 h-50 rounded-4" alt="" />
                    <div>
                        <h1 style={{fontSize: '20px', fontWeigth: '500', fontStyle: 'italic', color: '#fff'}}>Dịch Vụ</h1>
                    </div>
                </div>
            </div>
            <div className='testimonial py-4 px-4'>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={menuImg04} className="w-50 h-50 rounded-4" alt="" />
                    <div>
                        <h1 style={{fontSize: '20px', fontWeigth: '500', fontStyle: 'italic', color: '#fff'}}>Vòng Quay</h1>
                    </div>
                </div>
            </div>
        </Slider>
  )
}

export default Testimonials