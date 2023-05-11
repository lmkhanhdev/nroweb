import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <div class="login-box mt-5">
              <h2>Đăng Ký</h2>
              <form>
                <div class="user-box">
                  <input type="text" name="" required="" />
                  <label>Tên tài khoản</label>
                </div>
                <div class="user-box">
                  <input type="email" name="" required="" />
                  <label>Email</label>
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
                  Đăng Ký
                </a>
              </form>
              <span className='subtitle'>Đã có tài khoản?<Link to='/login'>Đăng nhập</Link> </span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Register