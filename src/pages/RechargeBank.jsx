import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/recharge-bank.css'
import Sidebar from '../shared/Sidebar'


const RechargeBank = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg='4'>
                    <Sidebar />
                </Col>
                <Col lg='6'>
                    <div className="rechargeBank">
                        <label>Nạp tiền từ ATM hoặc Ví điện tử</label>
                        <div className='rechargeBank__head'>
                            <h1>Hướng Dẫn Chi Tiết Nạp Tiền Từ ATM - Ví Tại Đây</h1>
                            <span>Thông tin tài khoản ngân hàng và ví</span>
                            <span>Tên tài khoản: LA MINH KHÁNH</span>
                            <ul className='rechargeBank__title'>
                                <li>MB BANK</li>
                                <li>1880925082003</li>
                            </ul>
                            <ul className='rechargeBank__title'>
                                <li>Ví MoMo</li>
                                <li>0349627790</li>
                            </ul>
                            <p>Nội dung thanh toán: Nap Tien www.acc207.com (tên tài khoản hoặc email)
                             Chuyển xong liên hệ fanpage : <Link >Chăm sóc khách hàng
                            - www.acc204.com</Link> hoặc Hotline<p style={{color: 'beige'}}>0349627790</p>để được xử lý.
                            </p>
                        </div>
                    </div>  
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default RechargeBank