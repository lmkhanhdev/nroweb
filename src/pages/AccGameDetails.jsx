import React, { useRef, useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { useParams } from 'react-router-dom'
import sosinhs from '../assets/datas/newborn'
import '../styles/accgame-details.css'
import { Link } from 'react-router-dom'


const AccGameDetails = () => {

  const {id} = useParams()

  const item = sosinhs.find(item => item.id === id)

  const [listPrice, setListPrice] = useState(true)
  const [listInfo, setListInfo] = useState(false)
  const tabRef = useRef(null)
  

  const handlePrice = () => {
    setListPrice(true)
    setListInfo(false)
  }

  const handleInfo = () => {
    setListPrice(false)
    setListInfo(true)
  }

  const handleClose = () => {
    tabRef.current.style.display='none'
  }

  const handleClick = () => {
    tabRef.current.style.display='block'
  }



  
  const { 
    maychu, 
    dangky, 
    loaiAcc, 
    noibat, 
    hanhtinh, 
    bongtai,
    atm, 
    card, 
    maso, 
    images,
    imgs
} = item

  return (
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <div className="acc__details">
              <h1>Ngọc Rồng Online</h1>
              <div className="acc__details-head">
                <h2>Thông Tin Tài Khoản #<span>{maso}</span></h2>
                <p>Để xem thêm chi tiết về tài khoản vui lòng kéo xuống bên dưới</p>
              </div>
              <div className="acc__details-price">
                <div className="details__price">
                  <span className='price__title'>ATM/VÍ: <span>{atm}</span></span>
                  <span className='price__title'>CARD: <span>{card}</span></span>
                </div>
                <div className="details__btns">
                  <button className='btn__price' onClick={handleClick}>
                    Mua Ngay
                  </button >
                    <div className='tab__price' ref={tabRef}>
                      <div className="tab__head">
                        <h3>Xác nhận mua tài khoản</h3>
                        <span onClick={handleClose}>
                          <i class="ri-close-line"></i>
                        </span>
                      </div>
                      <div className="tab__header">
                        <h4>Hướng Dẫn Chi Tiết Nạp Tiền Từ ATM - Ví Tại Đây</h4>
                        <div className='tab__button'>
                          <button 
                            className='btn__left' 
                            onClick={handlePrice} 
                            style={{ backgroundColor: listPrice ? '#19b1ff' : 'white' }}
                          >
                            Thanh Toán
                          </button>
                          <button 
                            className='btn__right' 
                            onClick={handleInfo} 
                            style={{ backgroundColor: listInfo ? '#19b1ff' : 'white' }}
                          >
                            Tài Khoản
                          </button>
                        </div>
                        { listPrice && (<div className='tab__list-price'>
                          <span className='tab__title' style={{ fontWeight: '700' }}>
                            Thông tin tài khoản #{maso}
                          </span>
                          <span className='tab__title'>
                            Nhà phát hành: <span>TeaMobile</span>
                          </span>
                          <span className='tab__title'>
                            Tên game: <span>Ngọc Rồng Online</span>
                          </span>
                          <span className='tab__title'>
                            Giá Tiền: <span style={{ color: '#ff2222' }}>{card}</span>
                          </span>
                        </div> )}
                        { listInfo && (<div className='tab__list-info'>
                          <span className='tab__title' style={{ fontWeight: '700' }}>
                            Chi tiết tài khoản #{maso}
                          </span>
                          <span className='tab__title'>
                            Máy chủ: <span>{maychu}</span>
                          </span>
                          <span className='tab__title'>
                            Hành tinh: <span>{hanhtinh}</span>
                          </span>
                          <span className='tab__title'>
                            Đăng ký: <span>{dangky}</span>
                          </span>
                          <span className='tab__title'>
                            Loại acc: <span>{loaiAcc}</span>
                          </span>
                        </div>)}
                        <div className="tab__footer">
                          <button className="tab__footer-btn">
                            <Link to=''>Thanh Toán</Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  <button className="btn__card">
                    <Link to='/recharge'>Nạp Thẻ</Link>
                  </button>
                  <button className="btn__card">
                    <Link to='/recharge-bank'>ATM/VÍ</Link>
                  </button>
                </div>
              </div>
              <div className="details__describe">
                <span className='describe__title'>Máy Chủ: <span>{maychu}</span></span>
                <span className='describe__title'>Hành Tinh: <span>{hanhtinh}</span></span>
                <span className='describe__title'>Đăng Ký: <span>{dangky}</span></span>
                <span className='describe__title'>Bông Tai: <span>{bongtai}</span></span>
                <span className='describe__title'>Loại Acc: <span>{loaiAcc}</span></span>
                <span className='describe__title'>Nổi Bật: <span>{noibat}</span></span>
              </div>
              <div className='details__img'>
                <p>Hình ảnh chi tiết của tài khoản #<span>{maso}</span></p>
                {imgs.map((img, index) => (
                  <div className="images__item" key={index}>
                    <img src={img.img01} alt="" />
                    <img src={img.img02} alt="" />
                    <img src={img.img03} alt="" />
                    <img src={img.img04} alt="" />
                    <img src={img.img05} alt="" />
                    <img src={img.img06} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AccGameDetails