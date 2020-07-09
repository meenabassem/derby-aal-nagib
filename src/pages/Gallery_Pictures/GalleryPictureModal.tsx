import React from "react";
import {Image, Modal} from "react-bootstrap";
import "./Gallery_PictureModal.scss";

interface GalleryPictureModalProps {
  show: boolean;
  imageUrl: string;
  onHide: () => void;
}

const GalleryPictureModal = (props: GalleryPictureModalProps) => {
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
export { GalleryPictureModal };
