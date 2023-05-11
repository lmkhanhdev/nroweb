import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import Sidebar from '../shared/Sidebar'
import '../styles/account-infor.css'


const AccountInfor = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="4">
            <Sidebar />
          </Col>
          <Col lg="6">
            <div className="accountInfor">
              <h1>THÔNG TIN TÀI KHOẢN</h1>
              <div className="accountInfor__title">
                <div className="subInfo">
                  <label>ID của bạn:</label>
                  <span>TK10112589</span>
                </div>
                <div className="subInfo">
                  <label>Tên tài khoản: </label>
                  <span>khanh12</span>
                </div>
                <div className="subInfo">
                  <label>Email: </label>
                  <span>khanh@gmail.com</span>
                </div>
                <div className="subInfo">
                  <label>Mật khẩu: </label>
                  <Link>Nhấn đổi mật khẩu</Link>
                </div>
                <div className="subInfo">
                  <label>Số dư: </label>
                  <span style={{ color: 'red' }}>- VNĐ</span>
                </div>
                <div className="subInfo">
                  <label>Ngày tham gia: </label>
                  <span>3/31/2023</span>
                </div>    
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AccountInfor