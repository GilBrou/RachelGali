/***GENERAL***/
import React from "react";
import { Link } from "react-router-dom";

/***Page***/
function Error404() {
    return (
        <div className="intro quatrecentquatre">
            <div className="overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 intro-text">
                            <div className="logo quatre1">
                                <b>
                                    4<span>0</span>4
                                </b>
                            </div>
                            <div className="logo quatre2">
                                <b>
                                    LA<span> PA</span>GE
                                    <span> QUE VOUS </span>
                                    DEMANDEZ N'<span>EXI</span>STE
                                    <span> P</span>AS
                                </b>
                            </div>
                            <Link to="/">
                                <div className="logo quatre4">
                                    <b>Retourner sur la page d'accueil</b>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Error404;
