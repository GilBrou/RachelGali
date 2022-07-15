/***AVIS MODULE***/
function Avis(props) {
  return (
    <div id="avis">
      <div className="container">
        <div className="section-title text-center black-section-title">
          {/*Title*/}
          <h2>{props.data ? props.data.sectionTitleAvisSub : "loading..."}</h2>
        </div>
        <div className="row">
          {/*Testimonial Card*/}
          {props.data2
            ? props.data2.map((d, i) => (
                <a
                  key={`${d.Atitle}-${i}`}
                  target="_blank"
                  rel="noreferrer"
                  href={d.linky}
                >
                  <div key={`${d.name}-${i}`} className="col-md-6">
                    <div className="testimonial">
                      <div className="testimonial-image">
                        {/*Testimonial Image*/} <img src={d.img} alt="" />{" "}
                      </div>
                      <div className="testimonial-content">
                        {/*Testimonial Title*/}

                        <h3>{d.Atitle}</h3>
                        {/*Testimonial Paragraph*/}

                        <p>"{d.text}"</p>
                        <div className="testimonial-meta"> - {d.name} </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
}

export default Avis;
