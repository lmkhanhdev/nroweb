import React, { useState, useRef } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Sidebar from '../shared/Sidebar'
import '../styles/recharge.css'

const Recharge = () => {

  const [price, setPrice] = useState('')

  const handlePrice = (e) => {
    setPrice(e.target.value)
  }





  return (
    <section>
      <Container>
        <Row>
          <Col lg="4">
            <Sidebar />
          </Col>
          <Col lg="6">
            <div className="recharge">
              <div className="recharge__title">
                <h1>Nạp Tiền Thẻ Cào</h1>
                <span>SỐ DƯ: 0 VND</span>
              </div>

              <div className="recharge__menu">
                <div className="recharge__menu-list">
                  <span>Nhà mạng:</span>
                  <select>
                    <option>Chọn nhà mạng</option>
                    <option value="viettel">Viettel</option>
                    <option value="vinaphone">Vinaphone</option>
                    <option value="mobiphone">Mobiphone</option>
                  </select>
                </div>
                <div className="recharge__price">
                  <span>Mệnh giá:</span>
                  <select  onChange={handlePrice}>
                    <option value="0">Chọn mệnh giá</option>
                    <option value="10,000">10,000</option>
                    <option value="20,000">20,000</option>
                    <option value="30,000">30,000</option>
                    <option value="50,000">50,000</option>
                    <option value="100,000">100,000</option>
                    <option value="200,000">200,000</option>
                    <option value="500,000">500,000</option>
                    <option value="1,000,000">1,000,000</option>
                  </select>
                </div>
                <span className='recharge__price-sub'>
                  Nhận được: 
                  <span>{price} VNĐ</span>
                </span>
                <span className='recharge__input'>
                  Số seri: 
                  <input type="text" placeholder='Nhập mã seri sau thẻ'/>
                </span>
                <span className='recharge__input'>
                  Mã thẻ: 
                  <input type="text" placeholder='Nhập mã thẻ sau lớp bạc mỏng'/>
                </span>
              </div>
              <button className='recharge__btn'>Đăng nhập để nạp thẻ</button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Recharge