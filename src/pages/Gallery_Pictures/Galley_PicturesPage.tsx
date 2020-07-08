import React, {useEffect, useState} from "react";
import {shuffle} from "lodash";
import "App.scss";
import {Card, Col, Row} from "react-bootstrap";
import {Gallery_PictureModal} from "pages/Gallery_Pictures/Gallery_PictureModal";

const _albumImages: string[] = [
  "https://www.victoriafallswcpr.com/images/gallery/Activities/Boyd%208.JPG",
  "https://www.victoriafallswcpr.com/images/gallery/Activities/Canoeing_10.jpg",
  "https://www.victoriafallswcpr.com/images/gallery/Activities/Chobe%20Safari%20Lodge%20A.jpg",
  "https://www.victoriafallswcpr.com/images/gallery/Activities/Devils%20Pool%20Vic%20Falls%20natGeo.jpg",
  "https://www.victoriafallswcpr.com/images/gallery/Activities/Flying%20Fox%20with%20Bridge.jpg",
  "https://www.victoriafallswcpr.com/images/gallery/Loft/zzxl.JPG",
  "https://www.victoriafallswcpr.com/images/gallery/Activities/IMG_0558.JPG",
  "https://www.victoriafallswcpr.com/images/gallery/Activities/Microlight.jpg",
  "https://www.victoriafallswcpr.com/images/gallery/Loft/zzxt.JPG",
  "https://www.victoriafallswcpr.com/images/gallery/Loft/zzxo.jpg",
  "https://www.victoriafallswcpr.com/images/gallery/Loft/zzxll.jpg"
];
const _albums: Album[] = [
  {
    image:
      "https://www.victoriafallswcpr.com/images/gallery/Accommodation/thumbs/mainthumb.jpg",
    id: "accomodation",
    title: "Accomodation"
  },
  {
    image:
      "https://www.victoriafallswcpr.com/images/gallery/Activities/thumbs/mainthumb.jpg",
    id: "activities",
    title: "Activities"
  },
  {
    image:
      "https://www.victoriafallswcpr.com/images/gallery/Jan%202017%20Final%20Race%20Week/thumbs/mainthumb.jpg",
    id: "accomodation",
    title: "Final Year"
  },
  {
    image:
      "https://www.victoriafallswcpr.com/images/gallery/Activities/thumbs/mainthumb.jpg",
    id: "activities",
    title: "Activities"
  },
  {
    image:
      "https://www.victoriafallswcpr.com/images/gallery/Accommodation/thumbs/mainthumb.jpg",
    id: "accomodation",
    title: "Accomodation"
  },
  {
    image:
      "https://www.victoriafallswcpr.com/images/gallery/Activities/thumbs/mainthumb.jpg",
    id: "activities",
    title: "Activities"
  },
  {
    image:
      "https://www.victoriafallswcpr.com/images/gallery/Accommodation/thumbs/mainthumb.jpg",
    id: "accomodation",
    title: "Accomodation"
  },
  {
    image:
      "https://www.victoriafallswcpr.com/images/gallery/Activities/thumbs/mainthumb.jpg",
    id: "activities",
    title: "Activities"
  },
  {
    image:
      "https://www.victoriafallswcpr.com/images/gallery/Accommodation/thumbs/mainthumb.jpg",
    id: "accomodation",
    title: "Accomodation"
  }
].map((i: Album) => ({
  ...i,
  id: `${i.id}_${new Date().getTime() * Math.random()}` //remove that later when list is from BE
}));

interface Album {
  id?: number | string;
  title: string;
  image: any;
}

const Gallery_PicturesPage = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const [currentAlbum, setCurrentAlbum] = useState<Album>();

  const [isPictureModalVisible, setPictureModalVisible] = useState<boolean>(
    false
  );
  const [clickedImage, setClickedImage] = useState<string>("");

  useEffect(() => {
    setTimeout(() => {
      //simulate load albums from API
      setAlbums(_albums);
      if (_albums?.length) {
        //load the images for first album by default
        onAlbumClick(_albums[0]);
      }
    }, 1000);
  }, []);
  const onAlbumClick = (album: Album) => {
    // console.log("Use album ID to get images for that album");
    setTimeout(() => {
      setImages(shuffle(_albumImages));
      setCurrentAlbum(album);
    }, 1000);
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
                  <Card.Img variant="top" src={_album.image} />
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
      <Gallery_PictureModal
        show={isPictureModalVisible}
        imageUrl={clickedImage}
        onHide={() => setPictureModalVisible(false)}
      />
    </div>
  );
};
export { Gallery_PicturesPage };
