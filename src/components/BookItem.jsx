/***BOOKITEM MODULE***/
function BookItem(props) {
  return (
    <div id="bookItem">
      {/*Different display styles according to content (testimonials, vidéos...)*/}
      {CheckBookStyle(props)}
      {CheckExtrait(props)}
      {CheckSecondVid(props)}
    </div>
  );
}
//Check book infos for displaying right template//
function CheckBookStyle(props) {
  if (props.data.oeuvre.length < 1 && props.data.video.length < 1) {
    /*console.log("no text, no vid");*/
    return (
      <div>
        {/**********CONTAINER 1**********/}
        <div className="container container1">
          {/**********CONTAINER 1 - 1 **********/}
          <div className="col-sm-12 col-md-6 col-lg-6 left1">
            {CheckImageformat(props)}
          </div>
          {/**********CONTAINER 1 - 2 **********/}
          <div className="col-sm-12 col-md-6 col-lg-6 right1">
            <h2 className="bookTitle">
              {props.data ? props.data.title : "loading..."}
            </h2>
            <h2 className="bookSubTitle">
              {props.data ? props.data.sousTitre : "loading..."}
            </h2>
            <h1 className="bookInfos">
              {props.data ? props.data.format : "loading..."} -{" "}
              {props.data ? props.data.éditeur : "loading..."}
            </h1>
            <div className="auteursTagsWrapper">
              {props.data.par.map((par) => (
                <h3 className="auteursTags" key={par}>
                  {par}
                </h3>
              ))}
            </div>
            <div className="genresTagsWrapper">
              {props.data.genres.map((genres) => (
                <h3 className="genreTags" key={genres}>
                  {genres}
                </h3>
              ))}
            </div>
            <p className="summary">
              {props.data ? props.data.résumé : "loading..."} <br />
              {props.data ? props.data.subres1 : "loading..."}{" "}
            </p>
          </div>
        </div>
        {CheckReviewsAndBuyLinks1(props)}
      </div>
    );
  } else if (props.data.oeuvre.length >= 1 && props.data.video.length < 1) {
    /*console.log("text, no vid");*/
    return (
      <div>
        {/**********CONTAINER 1**********/}
        <div className="container container1">
          {/**********CONTAINER 1 - 1 **********/}
          <div className="col-sm-12 col-md-6 col-lg-6 left1">
            {CheckImageformat(props)}
          </div>
          {/**********CONTAINER 1 - 2 **********/}
          <div className="col-sm-12 col-md-6 col-lg-6 right1">
            <h2 className="bookTitle">
              {props.data ? props.data.title : "loading..."}
            </h2>
            <h2 className="bookSubTitle">
              {props.data ? props.data.sousTitre : "loading..."}
            </h2>
            <h1 className="bookInfos">
              {props.data ? props.data.format : "loading..."} -{" "}
              {props.data ? props.data.éditeur : "loading..."}
            </h1>
            <div className="auteursTagsWrapper">
              {props.data.par.map((par) => (
                <h3 className="auteursTags" key={par}>
                  {par}
                </h3>
              ))}
            </div>
            <div className="genresTagsWrapper">
              {props.data.genres.map((genres) => (
                <h3 className="genreTags" key={genres}>
                  {genres}
                </h3>
              ))}
            </div>
            <p className="summary">
              {props.data ? props.data.résumé : "loading..."} <br />
              {props.data ? props.data.subres1 : "loading..."}{" "}
            </p>
          </div>
        </div>
        {/**********CONTAINER 2**********/}
        <div className="container container2">
          <h3 className="textInfos">
            {props.data ? props.data.type : "loading..."} :{" "}
            {props.data ? props.data.oeuvre : "loading..."}
          </h3>
          <p className="summary">
            {props.data ? props.data.résumé2 : "loading..."} <br />
            {props.data ? props.data.subres2 : "loading..."}{" "}
          </p>
        </div>
        {CheckReviewsAndBuyLinks2(props)}
      </div>
    );
  } else if (props.data.oeuvre.length < 1 && props.data.video.length >= 1) {
    /*console.log("no text, vid");*/
    return (
      <div>
        {/**********CONTAINER 1**********/}
        <div className="container container1">
          {/**********CONTAINER 1 - 1 **********/}
          <div className="col-sm-12 col-md-6 col-lg-6 left1">
            {CheckImageformat(props)}
          </div>
          {/**********CONTAINER 1 - 2 **********/}
          <div className="col-sm-12 col-md-6 col-lg-6 right1">
            <h2 className="bookTitle">
              {props.data ? props.data.title : "loading..."}
            </h2>
            <h2 className="bookSubTitle">
              {props.data ? props.data.sousTitre : "loading..."}
            </h2>
            <h1 className="bookInfos">
              {props.data ? props.data.format : "loading..."} -{" "}
              {props.data ? props.data.éditeur : "loading..."}
            </h1>
            <div className="auteursTagsWrapper">
              {props.data.par.map((par) => (
                <h3 className="auteursTags" key={par}>
                  {par}
                </h3>
              ))}
            </div>
            <div className="genresTagsWrapper">
              {props.data.genres.map((genres) => (
                <h3 className="genreTags" key={genres}>
                  {genres}
                </h3>
              ))}
            </div>
            <p className="summary">
              {props.data ? props.data.résumé : "loading..."} <br />
              {props.data ? props.data.subres1 : "loading..."}{" "}
            </p>
            {CheckReviews3(props)}
          </div>
        </div>
        {CheckBuy3andDisplayVideo(props)}
      </div>
    );
  } else if (props.data.oeuvre.length >= 1 && props.data.video.length >= 1) {
    /*console.log("text and vid");*/
    return (
      <div>
        {/**********CONTAINER 1**********/}
        <div className="container container1">
          {/**********CONTAINER 1 - 1 **********/}
          <div className="col-sm-12 col-md-6 col-lg-6 left1">
            {CheckImageformat(props)}
          </div>
          {/**********CONTAINER 1 - 2 **********/}
          <div className="col-sm-12 col-md-6 col-lg-6 right1">
            <h2 className="bookTitle">
              {props.data ? props.data.title : "loading..."}
            </h2>
            <h2 className="bookSubTitle">
              {props.data ? props.data.sousTitre : "loading..."}
            </h2>
            <h1 className="bookInfos">
              {props.data ? props.data.format : "loading..."} -{" "}
              {props.data ? props.data.éditeur : "loading..."}
            </h1>
            <div className="auteursTagsWrapper">
              {props.data.par.map((par) => (
                <h3 className="auteursTags" key={par}>
                  {par}
                </h3>
              ))}
            </div>
            <div className="genresTagsWrapper">
              {props.data.genres.map((genres) => (
                <h3 className="genreTags" key={genres}>
                  {genres}
                </h3>
              ))}
            </div>
            <p className="summary">
              {props.data ? props.data.résumé : "loading..."} <br />
              {props.data ? props.data.subres1 : "loading..."}{" "}
            </p>
            <h3 className="textInfos">
              {props.data ? props.data.type : "loading..."} :{" "}
              {props.data ? props.data.oeuvre : "loading..."}
            </h3>
            <p className="summary">
              {props.data ? props.data.résumé2 : "loading..."} <br />
              {props.data ? props.data.subres2 : "loading..."}{" "}
            </p>
          </div>
        </div>
        {CheckReviewsAndBuyLinksAndDisplayVideo(props)}
      </div>
    );
  }
}

function CheckReviewsAndBuyLinks1(props) {
  if (props.data.reviews.length >= 1 && props.data.buy.length >= 1) {
    /*console.log("reviews and buylinks");*/
    return (
      <div>
        {/**********CONTAINER 2**********/}
        <div className="container container2">
          {/**********CONTAINER 2 - 1 **********/}
          <div className="col-sm-6 col-md-6 col-lg-6">
            <div className="reviews">
              <p>Les lecteurs en parlent</p>
              {props.data.reviews.map((reviews) => (
                <a
                  key={reviews}
                  href={reviews}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-comment"></i>
                </a>
              ))}
            </div>
          </div>
          {/**********CONTAINER 2 - 2 **********/}
          <div className="col-sm-6 col-md-6 col-lg-6">
            <div className="reviews leftA">
              <p>Pour vous procurer l'ouvrage</p>
              {props.data.buy.map((buy) => (
                <a
                  key={buy.link}
                  href={buy.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ul>
                    <li>
                      <i className="fa fa-shopping-cart"></i>
                      {buy.nameE}
                    </li>
                  </ul>
                </a>
              ))}
            </div>
          </div>
          {/**********Main wrapper**********/}
        </div>
      </div>
    );
  } else if (props.data.reviews.length >= 1 && props.data.buy.length < 1) {
    /*console.log("reviews and no buylinks");*/
    return (
      <div>
        {/**********CONTAINER 2**********/}
        <div className="container container2">
          {/**********CONTAINER 2 - 1 **********/}
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="reviews">
              <p>Les lecteurs en parlent</p>
              {props.data.reviews.map((reviews) => (
                <a
                  key={reviews}
                  href={reviews}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-comment"></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  } else if (props.data.reviews.length < 1 && props.data.buy.length >= 1) {
    /*console.log("no reviews and buylinks");*/
    return (
      <div>
        {/**********CONTAINER 2**********/}
        <div className="container container2">
          {/**********CONTAINER 2 - 2 **********/}
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="reviews leftA">
              <p>Pour vous procurer l'ouvrage</p>
              {props.data.buy.map((buy) => (
                <a
                  key={buy.link}
                  href={buy.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ul>
                    <li>
                      <i className="fa fa-shopping-cart"></i>
                      {buy.nameE}
                    </li>
                  </ul>
                </a>
              ))}
            </div>
          </div>
          {/**********Main wrapper**********/}
        </div>
      </div>
    );
  } else {
    /*console.log("no reviews and no buylinks");*/
  }
}

function CheckReviewsAndBuyLinks2(props) {
  if (props.data.reviews.length >= 1 && props.data.buy.length >= 1) {
    /*console.log("reviews and buylinks");*/
    return (
      <div>
        {/**********CONTAINER 3**********/}
        <div className="container container2">
          {/**********CONTAINER 3 - 1 **********/}
          <div className="col-sm-6 col-md-6 col-lg-6">
            <div className="reviews">
              <p>Les lecteurs en parlent</p>
              {props.data.reviews.map((reviews) => (
                <a
                  key={reviews}
                  href={reviews}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-comment"></i>
                </a>
              ))}
            </div>
          </div>
          {/**********CONTAINER 3 - 2 **********/}
          <div className="col-sm-6 col-md-6 col-lg-6">
            <div className="reviews leftA">
              <p>Pour vous procurer l'ouvrage</p>
              {props.data.buy.map((buy) => (
                <a
                  key={buy.link}
                  href={buy.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ul>
                    <li>
                      <i className="fa fa-shopping-cart"></i>
                      {buy.nameE}
                    </li>
                  </ul>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  } else if (props.data.reviews.length >= 1 && props.data.buy.length < 1) {
    /*console.log("reviews and no buylinks");*/
    return (
      <div>
        {/**********CONTAINER 3**********/}
        <div className="container container2">
          {/**********CONTAINER 3 - 1 **********/}
          <div className="col-sm-6 col-md-6 col-lg-6">
            <div className="reviews">
              <p>Les lecteurs en parlent</p>
              {props.data.reviews.map((reviews) => (
                <a
                  key={reviews}
                  href={reviews}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-comment"></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  } else if (props.data.reviews.length < 1 && props.data.buy.length >= 1) {
    /*console.log("no reviews and buylinks");*/
    return (
      <div>
        {/**********CONTAINER 3**********/}
        <div className="container container2">
          {/**********CONTAINER 3 - 2 **********/}
          <div className="col-sm-6 col-md-6 col-lg-6">
            <div className="reviews leftA">
              <p>Pour vous procurer l'ouvrage</p>
              {props.data.buy.map((buy) => (
                <a
                  key={buy.link}
                  href={buy.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ul>
                    <li>
                      <i className="fa fa-shopping-cart"></i>
                      {buy.nameE}
                    </li>
                  </ul>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    /*console.log("no reviews and no buylinks");*/
  }
}

function CheckReviews3(props) {
  if (props.data.reviews.length >= 1) {
    /*console.log("reviews");*/
    return (
      <div>
        <div className="reviews">
          <p>Les lecteurs en parlent</p>
          {props.data.reviews.map((reviews) => (
            <a key={reviews} href={reviews} target="_blank" rel="noreferrer">
              <i className="fa fa-comment"></i>
            </a>
          ))}
        </div>
      </div>
    );
  } else {
    /*console.log("no reviews");*/
  }
}

function CheckBuy3andDisplayVideo(props) {
  if (props.data.buy.length >= 1) {
    /*console.log("buy links");*/
    return (
      <div>
        {/**********CONTAINER 2**********/}
        <div className="container container2">
          {/**********CONTAINER 2 - 1 **********/}
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="reviews leftA">
              <p>Pour vous procurer l'ouvrage</p>
              {props.data.buy.map((buy) => (
                <a
                  key={buy.link}
                  href={buy.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ul>
                    <li>
                      <i className="fa fa-shopping-cart"></i>
                      {buy.nameE}
                    </li>
                  </ul>
                </a>
              ))}
            </div>
          </div>
          {/**********CONTAINER 2 - 2 **********/}
          <div className="col-sm-12 col-md-8 col-lg-8 leftB">
            <div className="video-responsive">
              <iframe
                src={props.data.video}
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    /*console.log("no buy links");*/
    return (
      <div>
        {/**********CONTAINER 2**********/}
        <div className="container container2">
          {/**********CONTAINER 2 - 2 **********/}
          <div className="col-sm-12 col-md-12 col-lg-12 leftB">
            <div className="video-responsive">
              <iframe
                src={props.data.video}
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function CheckReviewsAndBuyLinksAndDisplayVideo(props) {
  if (props.data.reviews.length >= 1 && props.data.buy.length >= 1) {
    /*console.log("reviews and buylinks");*/
    return (
      <div>
        {/**********CONTAINER 2**********/}
        <div className="container container2">
          {/**********CONTAINER 2 - 1 **********/}
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="reviews">
              <p>Les lecteurs en parlent</p>
              {props.data.reviews.map((reviews) => (
                <a
                  key={reviews}
                  href={reviews}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-comment"></i>
                </a>
              ))}
            </div>
            <div className="reviews leftA">
              <p>Pour vous procurer l'ouvrage</p>
              {props.data.buy.map((buy) => (
                <a
                  key={buy.link}
                  href={buy.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ul>
                    <li>
                      <i className="fa fa-shopping-cart"></i>
                      {buy.nameE}
                    </li>
                  </ul>
                </a>
              ))}
            </div>
          </div>

          {/**********CONTAINER 2 - 2 **********/}
          <div className="col-sm-12 col-md-8 col-lg-8 leftB">
            <div className="video-responsive">
              <iframe
                src={props.data.video}
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else if (props.data.reviews.length >= 1 && props.data.buy.length < 1) {
    /*console.log("reviews and no buylinks");*/
    return (
      <div>
        {/**********CONTAINER 2**********/}
        <div className="container container2">
          {/**********CONTAINER 2 - 1 **********/}
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="reviews">
              <p>Les lecteurs en parlent</p>
              {props.data.reviews.map((reviews) => (
                <a
                  key={reviews}
                  href={reviews}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-comment"></i>
                </a>
              ))}
            </div>
          </div>
          {/**********CONTAINER 2 - 2 **********/}
          <div className="col-sm-12 col-md-8 col-lg-8 leftB">
            <div className="video-responsive">
              <iframe
                src={props.data.video}
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else if (props.data.reviews.length < 1 && props.data.buy.length >= 1) {
    /*console.log("no reviews and buylinks");*/
    return (
      <div>
        {/**********CONTAINER 2**********/}
        <div className="container container2">
          {/**********CONTAINER 2 - 1 **********/}
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="reviews leftA">
              <p>Pour vous procurer l'ouvrage</p>
              {props.data.buy.map((buy) => (
                <a
                  key={buy.link}
                  href={buy.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ul>
                    <li>
                      <i className="fa fa-shopping-cart"></i>
                      {buy.nameE}
                    </li>
                  </ul>
                </a>
              ))}
            </div>
          </div>

          {/**********CONTAINER 2 - 2 **********/}
          <div className="col-sm-12 col-md-8 col-lg-8 leftB">
            <div className="video-responsive">
              <iframe
                src={props.data.video}
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    /*console.log("no reviews and no buylinks");*/
    return (
      <div>
        {/**********CONTAINER 2**********/}
        <div className="container container2">
          {/**********CONTAINER 2 - 2 **********/}
          <div className="col-sm-12 col-md-12 col-lg-12 leftB">
            <div className="video-responsive">
              <iframe
                src={props.data.video}
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function CheckExtrait(props) {
  if (props.data.extrait.length >= 1) {
    /*console.log("extrait ok");*/
    return (
      <div>
        <a
          key={props.data.extrait}
          href={props.data.extrait}
          target="_blank"
          rel="noreferrer"
        >
          <div className="container container2">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="reviews extrait">Lire un extrait</div>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

function CheckSecondVid(props) {
  if (props.data.video2.length > 0) {
    /*console.log("there is another video");*/
    return (
      <div>
        {/**********CONTAINER 2**********/}
        <div className="container container2">
          {/**********CONTAINER 2 - 2 **********/}
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="video-responsive video-responsive2">
              <iframe
                src={props.data.video2}
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function CheckImageformat(props) {
  if (props.data.imgFormat == "Horizontal") {
    /*console.log("there is a format specification : horizontal");*/
    return (
      <div>
        <img
          className="img-responsive horizontalImg"
          src={props.data ? props.data.cover : "loading..."}
          alt={props.data ? props.data.title : "loading..."}
        />{" "}
      </div>
    );
  } else {
    /*console.log("no format specification : vertical");*/
    return (
      <div>
        <img
          className="img-responsive leftImg"
          src={props.data ? props.data.cover : "loading..."}
          alt={props.data ? props.data.title : "loading..."}
        />{" "}
      </div>
    );
  }
}

export default BookItem;
