import { Link } from "react-router-dom";
import Image from "./Image";

/***BIBLIO MODULE***/
function Biblio(props) {
  return (
    <div id="bibliographie" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>
            {props.data ? props.data.sectionTitleLivresSub : "loading..."}
          </h2>
          <p>{props.data ? props.data.sectionTitleLivresP : "loading..."}</p>
        </div>
        <div className="row">
          <div className="bookshelf portfolio-items">
            {props.data2
              ? props.data2.map((d, i) => (
                  <div
                    key={`${d.format}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-3"
                  >
                    <Link to={`/${d.id}`}>
                      <Image smallImage={d.cover} />
                    </Link>
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Biblio;
