/***ABOUT MODULE***/
export const About = (props) => {
  return (
    <div id="a-propos">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6 photoAuteurWrapper">
            {/*Photo*/}{" "}
            <img
              src={props.data ? props.data.photo1 : "loading..."}
              className="img-responsive photoAuteur"
              alt=""
            />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              {/*Title*/}
              <h2>{props.data ? props.data.sectionTitle : "loading..."}</h2>
              {/*Paragraph*/}
              <p>{props.data ? props.data.paragraph1 : "loading..."}</p>
              {/*Paragraph*/}

              <p>{props.data ? props.data.paragraph2 : "loading..."}</p>
              {/*Paragraph*/}

              <p>{props.data ? props.data.paragraph3 : "loading..."}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
