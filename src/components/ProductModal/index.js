import React from "react";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import ModalCarousel from "../ModalCarousel";

function ProductModal(props) {
  const product = useSelector((state) => state.modal.modalProduct);

  return (
    <Modal size="md" centered {...props}>
      <Modal.Header className="ms-4" closeButton>
        <Modal.Title>{product.title}</Modal.Title>
      </Modal.Header>
      <ModalCarousel images={product.images} />
      <Modal.Body className="mt-3 ms-4">
        <p>{product.description}</p>
      </Modal.Body>
    </Modal>
  );
}

export default ProductModal;
