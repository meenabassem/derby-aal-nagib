import React, {useEffect, useState} from "react";
import "App.scss";
import {Card, Col, Row} from "react-bootstrap";
import {GalleryPictureModal} from "pages/Gallery_Pictures/GalleryPictureModal";
import {NetworkHelper} from "modules/network/NetworkHelper";

interface Album {
  id?: number | string;
  title: string;
  coverImage: any;
  albumImages?: string[];
}

const GalleryPictureModalProps = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const [currentAlbum, setCurrentAlbum] = useState<Album>();
  const [isPictureModalVisible, setPictureModalVisible] = useState<boolean>(
    false
  );
  const [clickedImage, setClickedImage] = useState<string>("");

  useEffect(() => {
    NetworkHelper.post("/Lookups", {
      Lookups: ["Albums"]
    })
      .then(value => {
        if (value.data?.Albums?.length) {
          setAlbums(value.data?.Albums);
          onAlbumClick(value.data?.Albums[0]);
        }
      })
      .catch(reason => {
        console.log("Failed to load Albums", reason);
      });
  }, []);

  const onAlbumClick = (album: Album) => {
    setImages(album?.albumImages || []);
    setCurrentAlbum(album);
  };
  const onImageClick = (imageUrl: string) => {
    setClickedImage(imageUrl);
    setPictureModalVisible(true);
  };
  return (
    <div className={"page-body-container"}>
      <h1>Gallery - Pictures</h1>
      {albums?.length ? (
        <div>
          <h3>Albums</h3>
          <h6>(Click to open an album)</h6>
          <Col>
            <Row>
              {albums.map((_album: Album, albumIndex: number) => (
                <Card
                  style={{ width: "15rem", margin: "1rem" }}
                  key={_album.id}
                  onClick={() => onAlbumClick(_album)}
                >
                  <Card.Img variant="top" src={_album.coverImage} />
                  <Card.Body>
                    <Card.Text>{_album.title}</Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </Row>
          </Col>

          {images?.length ? (
            <div>
              <h3>{currentAlbum?.title} Pictures</h3>
              <h6>(click to view full size images)</h6>
              <Row>
                {images.map((_imageUrl: string, _imageIndex: number) => (
                  <Card
                    style={{ margin: "1rem" }}
                    key={_imageIndex}
                    onClick={() => {
                      onImageClick(_imageUrl);
                    }}
                  >
                    <Card.Img
                      style={{ width: "15rem", height: "15rem" }}
                      variant="top"
                      src={_imageUrl}
                    />
                  </Card>
                ))}
              </Row>
            </div>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
      <GalleryPictureModal
        show={isPictureModalVisible}
        imageUrl={clickedImage}
        onHide={() => setPictureModalVisible(false)}
      />
    </div>
  );
};
export { GalleryPictureModalProps };
