import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewDataForm from "./NewDataForm";

function NewDataModal(props) {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const create = props.create;
  const title = create ? "Creating New Data" : "Editing Data";

  return (
      <>
        {create ? (
            <Button
                color="primary"
                className="float-right"
                onClick={toggle}
                style={{ minWidth: "200px" }}
            >
              Create New
            </Button>
        ) : (
            <Button onClick={toggle}>Edit</Button>
        )}
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>{title}</ModalHeader>
          <ModalBody>
            <NewDataForm
                resetState={props.resetState}
                toggle={toggle}
                data={props.data}
                create={props.create}
            />
          </ModalBody>
        </Modal>
      </>
  );
}

export default NewDataModal;
