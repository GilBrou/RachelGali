/***GENERAL***/
import { useState, useEffect } from "react";

/***COMPONENTS***/
import Header3 from "./components/Header3";
import Links from "./components/Links";
/*
import Intro from "./components/Intro";
import About from "./components/About";
import Genres from "./components/Genres";
*/
import Error404 from "./Error404";

/***DATAS***/
import JsonData from "./data/data.json";

function LinkTree(data) {
  /*Get projects datas*/
  const [allData, setAllData] = useState({});
  useEffect(() => {
    setAllData(JsonData);
    window.scrollTo(0, 0);
  }, []);

  /***PAGE***/
  return (
    <div className="linksPage">
      <Header3 data={allData.header} />
      <Links data={data.data.Contact} />    
{/*
      <Genres data={data.data.Genres} />
      <Intro data={data.data.Intro} />            
      <About data={data.data.About} />
*/}
    </div>
  );
}

export default LinkTree;
