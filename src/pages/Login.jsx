import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/login.css'

const Login = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <div class="login-box mt-5">
              <h2>Đăng Nhập</h2>
              <form>
                <div class="user-box">
                  <input type="text" name="" required="" />
                  <label>Tên tài khoản</label>
                </div>
                <div class="user-box">
                  <input type="password" name="" required="" />
                  <label>Mật khẩu</label>
                </div>
                <a href="#">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Đăng nhập
                </a>
              </form>
              <span className='subtitle'>Không có tài khoản?<Link to='/register'>Đăng ký</Link> </span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Login