import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import DataList from "./DataList";
import NewDataModal from "./NewDataModal";

import axios from "axios";

import { API_URL } from "../constants";

function Home() {
  const [data, setData] = useState([]);

  const getData = () => {
    axios.get(API_URL).then((res) => setData(res.data));
  };

  const resetState = () => {
    getData();
  };

  useEffect(() => {
    resetState();
  }, []);

  return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <DataList data={data} resetState={resetState} />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewDataModal create={true} resetState={resetState} />
          </Col>
        </Row>
      </Container>
  );
}

export default Home;
