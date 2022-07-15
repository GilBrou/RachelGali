/***IMAGE MODULE***/
function Image({ title, largeImage, smallImage }) {
  return (
    <div className="portfolio-item">
      <div className="hover-bg">
        {" "}
        {/*<a href={largeImage} title={title}>*/}
          <img src={smallImage} className="img-responsive" alt={title} />{" "}
        {/*</a>{" "}*/}
      </div>
    </div>
  );
}

export default Image;
