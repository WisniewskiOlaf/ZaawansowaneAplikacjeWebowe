import React, {useState, useEffect, useRef} from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

const defaultIfEmpty = (value) => {
  return value === "" ? "" : value;
};
const FormUnit = ({title,onChange}) =>{
  return(
      <>
        <Label for="data">{title}</Label>
        <Input
            type="text"
            name="data"
            onChange={onChange}

        />
      </>
  )
}


function NewDataForm(props) {
    const [formData, setFormData] = useState({ pk: 0, data: "" });
    const [isEditing,setEditing] = useState(false);
    const [Inputs,setInputs] = useState([
        {title:"Pierwszy"},
    ])

    const [allData,setAllData] = useState([]);
    const formRef = useRef(null);
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

      for(let i =0; i < e.target.length-2;i++){
          console.log(e?.target[i]?.value)
          const newData = {pk:i,data:e?.target[i]?.value};
          axios.post(API_URL, newData).then(() => {
              props.resetState();
              props.toggle();
          });
      }


  };

  const editData = (e) => {
    e.preventDefault();
    axios.put(API_URL + formData.pk, formData).then(() => {
      props.resetState();
      props.toggle();
    });
  };

  const AddInputField = () =>{

    setInputs(prev => [...prev, {title:"Dodane Pole"}])
  }

  return (
      <Form onSubmit={props.data ? editData : createData} ref={formRef}>
        <FormGroup>
          {Inputs.map((dane,index)=>{
            return(
                <FormUnit key={index} title={dane.title} onChange={onChange} />
            )
          })}
            {props.create ?
                <Button onClick={()=>AddInputField()}>Dodaj Pole</Button>
                :
                ""
            }
        </FormGroup>
        <Button>Send</Button>
      </Form>
  );
}

export default NewDataForm;
