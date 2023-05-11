import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.css'

import { Container, Row, Col } from 'reactstrap'
import menuImg from '../assets/images/NapThe.png'
import menuImg02 from '../assets/images/TaiKhoan.png'
import menuImg03 from '../assets/images/DichVu.png'
import menuImg04 from '../assets/images/NickRandom.png'

import CategoryLists from '../components/CategoryLists/CategoryLists'
import Lucky from '../components/Lucky/Lucky'
import ServiceSection from '../components/ServiceSection/ServiceSection'
import Testimonials from '../components/Testimonials/Testimonials'

const Home = () => {

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="12">
                <div className="menu">
                  <div className="menu__content">
                    <h1>Menu Giao Dịch</h1>
                  </div>

                  <div className="menu__img d-flex gap-4">
                    <Link to="/recharge" className="menu__img-box">
                      <img src={menuImg} alt="" />
                      <span>Nạp Thẻ</span>
                    </Link>
                  
                    <Link className="menu__img-box">
                      <img src={menuImg02} alt="" />
                      <span>Tài Khoản</span>
                    </Link>
                  
                    <Link to="/service" className="menu__img-box">
                      <img src={menuImg03} alt="" />
                      <span>Dịch Vụ</span>
                    </Link>
                  
                    <Link className="menu__img-box">
                      <img src={menuImg04} alt="" />
                      <span>Vòng Quay</span>
                    </Link>
                  </div>
                </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg= "12">
              <div className="category">
                <div className="category__content">
                  <h1>Danh Mục Game</h1>
                </div>

                <CategoryLists />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col>
              <div className="lucky">
                <div className="lucky__content">
                  <h1>Thử Vận May</h1>
                </div>

                <Lucky />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
            <Row>
              <Col lg= "12">
                <div className="services">
                  <div className="services__content">
                    <h1>Dịch Vụ Game</h1>
                  </div>

                  <ServiceSection />
                </div>
              </Col>
            </Row>
          </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Home