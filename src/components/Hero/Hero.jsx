import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Hero.css";

export const Hero = () => {
  return (
    <>
      <Container className="px-4 py-5 hero-section">
        <Row className="align-items-center g-5 py-5">
          <Col lg={6}>
            <div class="lc-block mb-3">
              <div editable="rich">
                <h2 class="fw-bold display-5">Latest movies at cheap rates!</h2>
              </div>
            </div>
            <div class="lc-block mb-3">
              <div editable="rich">
                <p class="lead">
                  Quickly design and customize responsive mobile-first sites
                  with Bootstrap, the world’s most popular front-end open source
                  toolkit, featuring Sass variables and mixins, responsive grid
                  system, extensive prebuilt components, and powerful JavaScript
                  plugins.
                </p>
              </div>
            </div>
            <div class="lc-block d-grid gap-2 d-md-flex justify-content-md-start">
              <Button variant="warning" className="px-4 me-md-2">
                Go to Store
              </Button>
              <Button variant="outline-secondary" className="px-4">
                Explore Movies
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
