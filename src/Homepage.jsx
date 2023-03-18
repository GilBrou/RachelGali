/***GENERAL***/
import { useState, useEffect } from "react";

/***COMPONENTS***/
import Header from "./components/Header";
import Intro from "./components/Intro";
import Genres from "./components/Genres";
import Young from "./components/Young";
import Biblio from "./components/Biblio";
import Avis from "./components/Avis";
import About from "./components/About";
import Contact from "./components/Contact";

/***PAGE***/
function Homepage(data) {
  return (
    <div className="homepage">
      <Header data={data.data.header} />
      <Intro data={data.data.Intro} />
      <Genres data={data.data.Genres} />
      <Young data={data.data.young} />
      <Biblio data={data.data.header} data2={data.data.biblio} />
      <Avis data={data.data.header} data2={data.data.Avis} />
      <About data={data.data.About} />
      <Contact data={data.data.Contact} />
    </div>
  );
}

export default Homepage;
