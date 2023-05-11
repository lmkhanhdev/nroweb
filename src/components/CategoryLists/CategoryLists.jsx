import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import './category-lists.css'

import nick from '../../assets/images/NRO_SOSINH.png'
import nick02 from '../../assets/images/NRO_TAMTRUNG.png'
import nick03 from '../../assets/images/NRO_ITEM.png'
import nick04 from '../../assets/images/FF_NORMAL.jpg'
import nick05 from '../../assets/images/LQM_NORMAL.png'
import nick06 from '../../assets/images/LMTC_NORMAL.jpg'

const categorys = [
    {
        url: '/new-born',
        images: nick,
        name: 'NICK SƠ SINH - WIN DOANH TRẠI - ZIN',
        quantity: 2175,
        sold: 58049
    },
    {
        url: '/midrange',
        images: nick02,
        name: 'NICK TẦM TRUNG',
        quantity: 5175,
        sold: 7649
    },
    {
        url: '/shop-items',
        images: nick03,
        name: 'SHOP VẬT PHẨM',
        quantity: 825,
        sold: 2066
    },
    {
        url: '/free-fire',
        images: nick04,
        name: 'FREE FIRE',
        quantity: 275,
        sold: 3045
    },
    {
        url: '/aog',
        images: nick05,
        name: 'LIÊN QUÂN MOBILE',
        quantity: 1175,
        sold: 8754
    },
    {
        url: '/speed-battle',
        images: nick06,
        name: 'LIÊN MINH TỐC CHIẾN',
        quantity: 65,
        sold: 254
    },
]


const CategoryLists = () => {
  return (
    <section>
        <Container>
            <Row>
                {categorys?.map((category, index) => (
                    <Col lg="4" md="6" sm="6" key={index}>
                        <div className="category__menu" >
                            <div className="category__menu-img">
                                <img src={category.images} alt="" />
                            </div>
                            <div className="category__menu-title">
                                <h1>{category.name}</h1>
                                <span>Số Tài Khoản: {category.quantity}</span>
                                <span>Đã Bán: {category.sold}</span>
                            </div>
                            <button className='category__btn'>
                                <Link to={category.url}>Xem thêm</Link>
                            </button>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    </section>
  )
}

export default CategoryLists