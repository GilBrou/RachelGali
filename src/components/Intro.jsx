/***INTRO MODULE***/
function Intro(props) {
  return (
    <header id="header">
      <div id="anim" className="mainAnim"></div>
      <div className="intro fade-in">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                {/*Title*/}
                <h1>{props.data ? props.data.title : "Loading"}</h1>
                {/*Paragraph*/}
                <p>{props.data ? props.data.paragraph1 : "Loading"}</p>
                {/*Paragraph*/}
                <p>{props.data ? props.data.paragraph2 : "Loading"}</p>
                {/*Infography*/}
                <img
                  src={props.data ? props.data.infographie : "Loading"}
                  className="img-responsive infographie"
                  alt={props.data ? props.data.infographName : "Loading"}
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Intro;
