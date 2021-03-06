/***GENERAL***/
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import SmoothScroll from "smooth-scroll";

/***PAGES***/
import Homepage from "./Homepage";
import BookPage from "./BookPage";
import Error404 from "./Error404";

/***COMPONENTS***/
import Contact from "./components/Contact";

/***DATAS***/
import JsonData from "./data/data.json";

/*Smooth scroll parameters*/
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

/*Main app*/
function App() {
  /*Get datas*/
  const [allDatas, setAllDatas] = useState({});
  useEffect(() => {
    async function fetchDatas() {
      setAllDatas(JsonData);
    }
    fetchDatas();
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/accueil">
            <Homepage data={allDatas} />
          </Route>
          <Route exact path="/:id">
            <BookPage />
          </Route>
          <Route>
            <Redirect to="/accueil" />
          </Route>
          <Route>
            <Error404 />
          </Route>
        </Switch>
        <Contact data={allDatas.Contact} />
      </div>
    </Router>
  );
}

export default App;
