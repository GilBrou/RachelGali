/***GENERAL***/
import { useState, useEffect } from "react";

/***COMPONENTS***/
import Header2 from "./components/Header2";
import BookItem from "./components/BookItem";
import Error404 from "./Error404";

/***DATAS***/
import JsonData from "./data/data.json";

function BookPage(data) {
  /*Get projects datas*/
  const [allData, setAllData] = useState({});
  useEffect(() => {
    setAllData(JsonData);
    window.scrollTo(0, 0);
  }, []);

  const allBooks = allData.biblio;
  const allBooksYoung = allData.young;
  let myUrl = window.location.pathname.split("/");
  let myTarget = myUrl[1];
  const myBook = [];
  const allIds = [];

  for (let i in allBooks) {
    let element = allBooks[i].id;
    allIds.push(element);
    if (allBooks[i].id === myTarget) {
      myBook.push(allBooks[i]);
    }
  }

  for (let i in allBooksYoung) {
    let element = allBooksYoung[i].id;
    allIds.push(element);
    if (allBooksYoung[i].id === myTarget) {
      myBook.push(allBooksYoung[i]);
    }
  }
  let thisBook = myBook[0];

  /*CHECK URL*/
  function getInfo() {
    if (thisBook !== undefined || allIds.includes(myTarget)) {
      if (allIds.includes(myTarget)) {
        return <BookItem data={thisBook} />;
      } else {
        return <Error404 />;
      }
    } else {
      return <Error404 />;
    }
  }

  /***PAGE***/
  return (
    <div className="bookpage">
      <Header2 data={allData.header} />
      {getInfo()}
    </div>
  );
}

export default BookPage;
