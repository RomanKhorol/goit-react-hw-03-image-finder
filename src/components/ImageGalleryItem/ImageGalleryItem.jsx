const ImageGalleryItem = ({ pitureUrl, hendleImgClik }) => (
  <li className="gallery-item">
    <img src={pitureUrl} alt="" width="300px" onClick={hendleImgClik} />
  </li>
);
export default ImageGalleryItem;
