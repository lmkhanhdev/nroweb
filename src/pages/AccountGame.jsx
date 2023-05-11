import React from 'react'
import CategoryLists from '../components/CategoryLists/CategoryLists'
import { Col, Container, Row } from 'reactstrap'

const AccountGame = () => {
  return (
    <section>
        <Container>
          <Row>
            <Col lg= "12">
              <div className="category">
                <div className="category__content">
                  <h1>Danh Mục Game</h1>
                </div>

                <CategoryLists />
              </div>
            </Col>
          </Row>
        </Container>
      </section>  )
}

export default AccountGame