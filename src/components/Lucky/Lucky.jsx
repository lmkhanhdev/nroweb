import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import './lucky.css'

import luck from '../../assets/images/nhapnickpro.jpg'
import luck02 from '../../assets/images/LK_NRO.png'

const luckyTitles = [
    {
        images: luck,
        name: 'NHẬP NICK NGỌC RỒNG',
        join: 555,
    },
    {
        images: luck02,
        name: 'RAMDOM NGỌC RỒNG',
        join: 2354,
    },
    {
        images: luck02,
        name: 'RAMDOM NGỌC RỒNG TẦM TRUNG VIP',
        join: 893,
    },
]

const Lucky= () => {
  return (
    <section>
        <Container>
            <Row>
                {luckyTitles?.map((luckyTitle, index) => (
                    <Col lg="4" md="6" sm="6" key={index}>
                        <div className="lucky__menu" >
                            <div className="lucky__menu-img">
                                <img src={luckyTitle.images} alt="" />
                            </div>
                            <div className="lucky__menu-title">
                                <h1>{luckyTitle.name}</h1>
                                <span>Đã Tham Gia: {luckyTitle.join}</span>
                            </div>
                            <button className='lucky__btn'>
                                <Link to='/accounts/buynick'>Xem thêm</Link>
                            </button>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    </section>
  )
}

export default Lucky