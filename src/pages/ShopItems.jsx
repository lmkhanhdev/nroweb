import React, { useState, useEffect } from 'react'
import shopItems from '../assets/datas/shopitems'
import { Container, Col, Row, Card, CardBody } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/new-born.css'
import SearchBar from '../shared/SearchBar'

const ShopItems = () => {

  const [pageCount, setPageCount] = useState(0)
  const [page, setPage] = useState(0)

  useEffect(() => {
    const pages = Math.ceil(5/4)
    setPageCount(pages)
  }, [page])

  return (
    <section>
      <Container>
        <Row>
          <Col lg='12' md='12' sm='12'>
            <div className="new__born-head">
              <h1>Ngọc rồng Online - Sơ Sinh</h1>
              <SearchBar />
            </div>
          </Col>
          {shopItems?.map((shopItem) => (
            <Col lg='3' md='6' sm='6' key={shopItem.id}>
              <div className="new__born">
                <Card>
                  <div className="new__born-img">
                    <img src={shopItem.images} alt="" />
                    <span>{shopItem.maso}</span>
                    <p>ATM/VÍ ĐIỆN TỬ: {shopItem.atm}</p>
                  </div>
                </Card>
                <CardBody>
                  <div className='card__top align-items-center
                  justify-content-between'>
                    <div className="new__born-top d-flex">
                      <span className="new__born-item d-flex align-items-center
                      gap-1">
                          Máy chủ: <span>{shopItem.maychu}</span>
                      </span>
                      <span className="new__born-item d-flex align-items-center
                      gap-1">
                          Hành tinh: <span>{shopItem.hanhtinh}</span>
                      </span>
                    </div>
                    <div className="new__born-bottom d-flex">
                      <span className="new__born-rating d-flex align-items-center
                      gap-1">
                          Đăng ký: <span>{shopItem.dangky}</span>
                      </span>
                      <span className="new__born-rating d-flex align-items-center
                      gap-1">
                          Loại đồ: <span>{shopItem.loaido}</span>
                      </span>
                    </div>
                  </div>
                  
                  <div className="card__bottom d-flex align-items-center
                  justify-content-between mt-3">
                      <span className='new__born-price'>
                          Tiền Card: <span>{shopItem.card}</span>
                      </span>

                      <button className="btn detail__btn">
                          <Link to={`/items/${shopItem.id}`}>Chi Tiết</Link>
                      </button>
                  </div>
                </CardBody>
              </div>
            </Col>
          ))}

          <Col lg="12">
            <div className="pagination d-flex align-items-center
            justify-content-center mt-4 gap-3">
                {[ ...Array(pageCount).keys()].map(number => (
                  <span
                    key={number} 
                    onClick={() => setPage(number)}
                    className={page === number ? "active__page" : ""}
                  >
                    {number + 1 }
                  </span>
                ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default ShopItems