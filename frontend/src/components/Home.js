import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import DataList from "./DataList";
import NewDataModal from "./NewDataModal";

import axios from "axios";

import { API_URL } from "../constants";

class Home extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.resetState();
  }

  getData = () => {
    axios.get(API_URL).then(res => this.setState({ data: res.data }));
  };

  resetState = () => {
    this.getData();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <DataList
              data={this.state.data}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewDataModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
