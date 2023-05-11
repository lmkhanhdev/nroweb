import React, { useEffect, useState } from 'react'
import sosinhs from '../assets/datas/newborn'
import { Container, Row, Col } from 'reactstrap'
import { Card, CardBody } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/new-born.css'
import SearchBar from '../shared/SearchBar'

const NewBorn = () => {

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
              <h1>Ngọc rồng Online - Vật phẩm</h1>
              <SearchBar />
            </div>
          </Col>
          {sosinhs?.map((item) => (
            <Col lg='3' md='6' sm='6' key={item.id}>
              <div className="new__born">
                <Card>
                  <div className="new__born-img">
                    <img src={item.images} alt="" />
                    <span>{item.maso}</span>
                    <p>ATM/VÍ ĐIỆN TỬ: {item.atm}</p>
                  </div>
                </Card>
                <CardBody>
                  <div className='card__top align-items-center
                  justify-content-between'>
                    <div className="new__born-top d-flex">
                      <span className="new__born-item d-flex align-items-center
                      gap-1">
                          Máy chủ: <span>{item.maychu}</span>
                      </span>
                      <span className="new__born-item d-flex align-items-center
                      gap-1">
                          Hành tinh: <span>{item.hanhtinh}</span>
                      </span>
                    </div>
                    <div className="new__born-bottom d-flex">
                      <span className="new__born-rating d-flex align-items-center
                      gap-1">
                          Đăng ký: <span>{item.dangky}</span>
                      </span>
                      <span className="new__born-rating d-flex align-items-center
                      gap-1">
                          Bông tai: <span>{item.bongtai}</span>
                      </span>
                    </div>
                  </div>
                  
                  <div className="card__bottom d-flex align-items-center
                  justify-content-between mt-3">
                      <span className='new__born-price'>
                          Tiền Card: <span>{item.card}</span>
                      </span>

                      <button className="btn detail__btn">
                          <Link to={`/accountsdetails/${item.id}`}>Chi Tiết</Link>
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

export default NewBorn