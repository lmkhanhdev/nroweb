import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link, NavLink } from 'react-router-dom'
import '../shared/side-bar.css'

const nav__links = [
  {
    path: '/account-infor',
    display: 'Thông tin tài khoản'
  },
  {
    path: '/recharge',
    display: 'Nạp tiền thẻ cào'
  },
  {
    path: '/recharge-bank',
    display: 'Nạp tiền ATM - Ví điện tử'
  },
  {
    path: '/transaction',
    display: 'Lịch sử giao dịch'
  }
]

const nav__links2 = [
  {
    path: '/spin-history',
    display: 'Lịch sử vận may'
  },
  {
    path: '/purchased-account',
    display: 'Tài khoản đã mua'
  },
  {
    path: '/rental-service',
    display: 'Dịch vụ đã thuê'
  },
]

const Sidebar = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col>
            <div className="sidebar">
              <div className="sidebar__menu-acc">
                <h1>MENU TÀI KHOẢN</h1>
                {nav__links.map((item, index) => (
                  <span className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={navClass => 
                        navClass.isActive ? "active__link" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </span>
                ))}
              </div>

              <div className="sidebar__menu-transaction">
                <h1>MENU GIAO DỊCH</h1>
                {nav__links2.map((item, index) => (
                  <span className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={navClass => 
                        navClass.isActive ? "active__link" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </span>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Sidebar