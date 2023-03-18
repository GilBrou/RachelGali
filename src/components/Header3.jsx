/***HEADER/NAV2 MODULE***/
export const Header3 = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top head2">
      <div className="container">
        {/*Header left*/}
        <div className="navbar-header">
          {/*Homepage Link*/}
          <a href="/accueil#bibliographie">
            {/*Site logo*/}
            <img
              src={props.data ? props.data.logo : "loading..."}
              className="img-responsive page-scroll authorLogo"
              href="#page-top"
              alt={props.data ? props.data.nom : "loading..."}
            />{" "}
          </a>
        </div>
        
      </div>
    </nav>
  );
};

export default Header3;
