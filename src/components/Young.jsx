import { Link } from "react-router-dom";
import Image from "./Image";

/***YOUNG BOOKS BIBLIO MODULE***/
function Young(props) {
  return (
    <div id="bibliographieJeunesse" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Album jeunesse</h2>
        </div>
        <div className="row">
          <div className="bookshelf2 portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.formatMin}-${i}`}
                    className="insideYoung col-sm-12 col-md-6 col-lg-6"
                  >
                    <Link to={`/${d.id}`}>
                      <Image smallImage={d.cover} />
                    </Link>
                  </div>
                ))
              : "Loading..."}
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="insideYoungR col-sm-12 col-md-6 col-lg-6"
                  >
                    <h1>{d.formatMin}</h1>
                    <p> {d.résumé}</p>
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Young;
