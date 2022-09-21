/***IMAGE MODULE***/
function Image({ title, largeImage, smallImage }) {
  return (
    <div className="portfolio-item">
      <div className="hover-bg">
        {" "}
        <img src={smallImage} className="img-responsive vertiCover" alt={title} />{" "}
      </div>
    </div>
  );
}

export default Image;
