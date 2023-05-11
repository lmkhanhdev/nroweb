import React, { useRef } from 'react'

import { Container, Row, Button } from 'reactstrap'
import { NavLink, Link } from 'react-router-dom'
import './header.css'
import logo from '../../assets/images/logo-removebg-preview.png'

const nav__links = [
  {
    path: '/home',
    display: 'TRANG CHỦ'
  },
  {
    path: '/recharge',
    display: 'NẠP TIỀN'
  },
  {
    path: '/service',
    display: 'DỊCH VỤ'
  },
  {
    path: '/accounts',
    display: 'NICK GAME'
  }
] 

const Header = () => {

  const menuRef = useRef(null)
  const toggleMenu = () => menuRef.current.classList.toggle('show__menu')



  return (
    <header className='header'>
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center
          justify-content-between">
            <div className="logo">
              <img src={logo} alt="" />
            </div>

            <div className="navigation align-items-center gap-4" ref={menuRef} onClick={toggleMenu}>
              <ul className="menu d-flex align-items-center gap-4">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={navClass => 
                        navClass.isActive ? "active__link" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="nav__btns d-flex align-items-center gap-4">
                <Button className='btn secondary__btn'>
                  <Link to="/login">Đăng Nhập</Link>
                </Button>
                <Button className='btn primary__btn'>
                  <Link to="/register">Đăng Ký</Link>
                </Button>
              </div>
            </div>

            <div className="nav__right d-flex align-items-center gap-4">
              <span className="mobile__menu" onClick={toggleMenu}>
                <i class="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header