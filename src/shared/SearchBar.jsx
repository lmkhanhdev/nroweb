import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import './search-bar.css'

const SearchBar = () => {
  return (
    <section>
        <Container>
            <Row>

                <Col lg='12'>
                    <div className="search__bar d-flex align-items-center justify-content-between">
                    <Col lg='3' md='12' sm='12'>
                    <div className="search__menu">
                            <span>Mã Số</span>
                            <input type="text" placeholder='Nhập mã số'/>
                        </div>
                    </Col>
                    <Col lg='3' md='12' sm='12'>
                        <div className="search__menu">
                            <span>Giá</span>
                            <select>
                                <option>Tất cả</option>
                                <option>Dưới 200k</option>
                                <option>Từ 200k đến 400k</option>
                                <option>Từ 400k đến 600k</option>
                                <option>Từ 600k đến 1tr</option>
                                <option>Từ 1tr đến 1tr500</option>
                                <option>Từ 1tr500 đến 2tr</option>
                                <option>Trên 2tr</option>
                            </select>
                        </div>
                        </Col>
                        <Col lg='3' md='12' sm='12'>
                        <div className="search__menu">
                            <span>Trạng thái</span>
                            <select>
                                <option>Trạng thái</option>
                                <option>Chưa bán</option>
                                <option>Đã bán</option>
                                <option>Đã đặt cọc</option>
                            </select>
                        </div>
                        </Col>
                        <Col lg='3' md='12' sm='12'>
                        <div className="search__menu">
                            <span>Máy chủ</span>
                            <select>
                                <option>Máy chủ</option>
                                <option>1 Sao</option>
                                <option>2 Sao</option>
                                <option>3 Sao</option>
                                <option>4 Sao</option>
                                <option>5 Sao</option>
                                <option>6 Sao</option>
                                <option>7 Sao</option>
                                <option>8 Sao</option>
                                <option>9 Sao</option>
                                <option>10 Sao</option>
                                <option>Nước ngoài</option>
                            </select>
                        </div>
                        </Col>
                        <Col lg='3' md='12' sm='12'>
                            <div className="search__menu">
                                <span>Hành tinh</span>
                                <select>
                                    <option>Hành tinh</option>
                                    <option>Trái đất</option>
                                    <option>Xay da</option>
                                    <option>Na mek</option>
                                </select>
                            </div>
                        </Col>
                        <Col lg='3' md='12' sm='12'>
                            <div className="search__menu">
                                <span>Đăng ký</span>
                                <select>
                                    <option>Đăng ký</option>
                                    <option>Ảo</option>
                                    <option>Thật</option>
                                </select>
                            </div>
                        </Col>
                        <Col lg='3' md='12' sm='12'>
                            <div className="search__menu">
                                <span>Loại acc</span>
                                <select>
                                    <option>Loại acc</option>
                                    <option>Sơ sinh</option>
                                    <option>Win doanh trại</option>
                                    <option>200Tr sức mạnh</option>
                                    <option>Zin</option>
                                </select>
                            </div>

                        </Col>
                        <Col lg='3' md='12' sm='12'>
                            <button className="search__btn">Tìm Kiếm</button>
                        </Col>

                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default SearchBar