import React from "react";
import { Row, Container, Col, Button } from "reactstrap";

export const ErrorView = ({ history }) => {
  return (
    <div className="connection-error align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="6">
            <div className="clearfix">
              <h1 className="pt-3">Oops!</h1>
              <h5 className="text-muted float-left">Error. La página no pudo cargar.</h5>
            </div>
            <Row>
              <Col md={12}>
                <Button className="mt-2" color="info" block onClick={() => history.goBack()}>Volver</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};



