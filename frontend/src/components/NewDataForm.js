import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

function NewDataForm(props) {
  const [formData, setFormData] = useState({ pk: 0, data: "" });

  useEffect(() => {
    if (props.data) {
      const { pk, data } = props.data;
      setFormData({ pk, data });
    }
  }, [props.data]);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const createData = (e) => {
    e.preventDefault();
    axios.post(API_URL, formData).then(() => {
      props.resetState();
      props.toggle();
    });
  };

  const editData = (e) => {
    e.preventDefault();
    axios.put(API_URL + formData.pk, formData).then(() => {
      props.resetState();
      props.toggle();
    });
  };

  const defaultIfEmpty = (value) => {
    return value === "" ? "" : value;
  };

  return (
      <Form onSubmit={props.data ? editData : createData}>
        <FormGroup>
          <Label for="data">Data:</Label>
          <Input
              type="text"
              name="data"
              onChange={onChange}
              value={defaultIfEmpty(formData.data)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
  );
}

export default NewDataForm;
