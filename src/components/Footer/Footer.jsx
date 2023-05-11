import React from 'react'
import './footer.css'

import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col>
            <div className="footer__titles">
              <h1>WWW.ACC204.COM</h1>
              <p>Hệ thống mua bán nick game tự động uy tín,< br/> nhanh gọn, an toàn tuyệt đối.</p>
              <span>Giới Thiệu</span>
              <span>Điều Khoản</span>
              <span>Uy Tín Của Shop</span>
            </div>
          </Col>

          <Col>
            <div className="footer__contact">
              <h1>CHI TIẾT LIÊN HỆ</h1>
              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link to="#"><i class="ri-facebook-circle-line"></i></Link>
                </span>
                <span>
                  <Link to="#"><i class="ri-youtube-line"></i></Link>
                </span>
                <span>
                  <Link to="#"><i class="ri-instagram-line"></i></Link>
                </span>
              </div>
              <div className="contact__info">
                <p>Hotline: 1234556789 (8h-20h) </p>
                <p>Email: laminhkhanh@gmail.com</p>
                <p>Web được phát triển bởi <span>DEV-MinhKhanh</span></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer