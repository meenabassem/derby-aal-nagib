import React from "react";
import {Image, Modal} from "react-bootstrap";
import "./Gallery_PictureModal.scss";

interface Gallery_PictureModalProps {
  show: boolean;
  imageUrl: string;
  onHide: () => void;
}

const Gallery_PictureModal = (props: Gallery_PictureModalProps) => {
  const { imageUrl, show, onHide } = props;
  return (
    <Modal
      dialogClassName="modal-90w"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={onHide}
    >
      <Modal.Header closeButton />
      <Modal.Body>
        <Image style={{ display: "block", margin: "auto" }} src={imageUrl} />
      </Modal.Body>
    </Modal>
  );
};
export { Gallery_PictureModal };
