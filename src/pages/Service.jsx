import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import ServiceSection from '../components/ServiceSection/ServiceSection'


const Service = () => {
  return (
    <section>
        <Container>
            <Row>
              <Col lg= "12">
                <div className="services">
                  <div className="services__content">
                    <h1>Dịch Vụ Game</h1>
                  </div>

                  <ServiceSection />
                </div>
              </Col>
            </Row>
          </Container>
      </section>
  )
}

export default Service