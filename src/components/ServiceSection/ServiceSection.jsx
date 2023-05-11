import React from 'react'
import './service-section.css'

import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import hero01 from '../../assets/images/dichvugame-1.png'
import hero02 from '../../assets/images/dichvugame-2.png'
import hero03 from '../../assets/images/NRO_UBK.png'
import hero04 from '../../assets/images/NRO_SDT.png'
import hero05 from '../../assets/images/NRO_USMDT.png'
import hero06 from '../../assets/images/NRO_LNV.png'

const serviceTitles = [
    {
        images: hero01,
        name: 'BÁN VÀNG TƯ ĐỘNG',
        transaction: 56987
    },
    {
        images: hero02,
        name: 'BÁN NGỌC TƯ ĐỘNG',
        transaction: 216987
    },
    {
        images: hero03,
        name: 'ÚP BÍ KÍP',
        transaction: 347
    },
    {
        images: hero04,
        name: 'SĂN ĐỆ TỬ',
        transaction: 2134
    },
    {
        images: hero05,
        name: 'ÚP SỨC MẠNH ĐỆ TỬ',
        transaction: 56
    },
    {
        images: hero06,
        name: 'LÀM NHIỆM VỤ',
        transaction: 587
    },
]



const ServiceSection = () => {
  return (
    <section>
        <Container>
            <Row>
                {serviceTitles?.map((serviceTitle, index) => (
                    <Col lg="4" md="6" sm="6" key={index}>
                        <div className="serviceTitle__menu" >
                            <div className="serviceTitle__menu-img">
                                <img src={serviceTitle.images} alt="" />
                            </div>
                            <div className="serviceTitle__menu-title">
                                <h1>{serviceTitle.name}</h1>
                                <span>Số Tài Khoản: {serviceTitle.transaction}</span>
                            </div>
                            <button className='serviceTitle__btn'>
                                <Link to='/service-details/:id'>Xem thêm</Link>
                            </button>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    </section>
  )
}

export default ServiceSection