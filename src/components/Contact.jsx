/***CONTACT MODULE***/
function Contact(props) {
  return (
    <div>
      <div id="footer">
        <div id="contact">
          <div className="social">
            <div className="tight">
              {/*Paragraph*/}
              <p className="contactP"> {props.data ? props.data.argu : "/"}</p>
            </div>
            <ul>
              {/*Mail Link*/}
              <li>
                <a href="mailto:rachel.gali@outlook.fr">
                  <i className="fa fa-envelope"></i>
                </a>
              </li>
              {/*Facebook Link*/}
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={props.data ? props.data.facebook : "/"}
                >
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              {/*Instagram Link*/}
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={props.data ? props.data.instagram : "/"}
                >
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
