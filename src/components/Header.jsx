/***HEADER/NAV MODULE***/
function Header(props) {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        {/*Header left*/}
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="page-scroll" href="#page-top">
            {/*Site logo*/}
            <img
              src={props.data ? props.data.logo : "loading..."}
              className="img-responsive page-scroll authorLogo"
              href="#page-top"
              alt={props.data ? props.data.nom : "loading..."}
            />{" "}
          </a>
        </div>
        {/*Header right*/}
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            {/*Scrollable section title*/}
            <li>
              <a href="#bibliographie" className="page-scroll">
                {props.data ? props.data.sectionTitleLivres : "loading..."}
              </a>
            </li>
            {/*Scrollable section title*/}
            <li>
              <a href="#avis" className="page-scroll">
                {props.data ? props.data.sectionTitleAvis : "loading..."}
              </a>
            </li>
            {/*Scrollable section title*/}

            <li>
              <a href="#a-propos" className="page-scroll">
                {props.data ? props.data.sectionTitleAbout : "loading..."}
              </a>
            </li>
            {/*Scrollable section title*/}
            <li>
              <a href="#contact" className="page-scroll">
                {props.data ? props.data.sectionTitleContact : "loading..."}
              </a>
            </li>
            {/*Blog Link*/}
            <li>
              <a
                href="https://rachelgali.wordpress.com/"
                target="_blank"
                rel="noreferrer"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
