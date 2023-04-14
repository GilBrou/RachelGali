/***LINKS MODULE***/
function Links(props) {
  return (
    <div className="intro linkyPage">
      <div className="overlay">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-md-offset-2 intro-text">
              <h1>Auteure jeunesse et imaginaire</h1>

              {/*SHOP LINK*/}
              <a
                className="linkTreeLink"
                rel="noreferrer"
                href={props.data ? props.data.ateshLink : "/"}
              >
                <i className="fa fa-cart-arrow-down">
                  <i className="fa fa-arrow-left"></i>Atesh
                </i>
              </a>

              {/*WEBSITE LINK*/}

              <a
                className="linkTreeLink"
                rel="noreferrer"
                href={props.data ? props.data.website : "/"}
              >
                <i className="fa fa-bars">
                  <i className="fa fa-arrow-left"></i> site Web
                </i>
              </a>

              {/*INSTAGRAM LINK*/}

              <a
                className="linkTreeLink"
                rel="noreferrer"
                href={props.data ? props.data.instagram : "/"}
              >
                <i className="fa fa-instagram">
                  {" "}
                  <i className="fa fa-arrow-left"></i>Instagram
                </i>
              </a>

              {/*FACEBOOK LINK*/}

              <a
                className="linkTreeLink"
                rel="noreferrer"
                href={props.data ? props.data.facebook : "/"}
              >
                <i className="fa fa-facebook">
                  <i className="fa fa-arrow-left"></i> Facebook
                </i>
              </a>

              {/*BLOG LINK*/}

              <a
                className="linkTreeLink"
                rel="noreferrer"
                href={props.data ? props.data.blogLink : "/"}
              >
                <i className="fa fa-pencil-square-o">
                  {" "}
                  <i className="fa fa-arrow-left"></i>Blog
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Links;
