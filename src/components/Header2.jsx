/***HEADER/NAV2 MODULE***/
export const Header2 = (props) => {
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
        {/*Header right*/}
        <ul className="nav navbar-nav navbar-right">
          {/*Homepage Link*/}
          <li>
            <a href="/accueil#bibliographie">Retour</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header2;
