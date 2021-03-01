import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";

const textFiles = {
  apod: '../text/AboutAPOD.md',
  epic: '../text/AboutEPIC.md',
  aboutUs: '../text/AboutUs.md'
};

export const TextModal = (props) => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    axios.get(textFiles[props.id])
      .then((res) => setMarkdown(res.data))
  }, [props.id]);

  return (
     <Modal show={props.show} onHide={props.onClick}>
        <Modal.Body>
          <h5>
          <ReactMarkdown source={markdown} />
          </h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onClick}>
            Close
           </Button>
        </Modal.Footer>
      </Modal>
  );
}