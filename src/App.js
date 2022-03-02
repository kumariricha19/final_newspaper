import "./App.css";
import Data from "./data.json";
import NewsTab from "./components/NewsTab";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import React, { Component } from "react";

function App() {
  let singleData = Data[0];
  let arrayData = [];

  var click = 0;
  var date = 0;
  var sent = 0;
  var cat = 0;
  var [click, setClick] = useState(0);
  var [date, setDate] = useState(0);
  var [sent, setSent] = useState(0);
  var [cat, setCat] = useState(0);
  const initialState = "All";
  const [filterDate1, setFilterDate1, All] = useState(initialState);
  const [filterCategory11, setFilterCategory11] = useState(initialState);
  const [filterSentiment1, setFilterSentiment1] = useState(initialState);

  //date filter
  const [dateFilterArray, setDateFilterArray] = useState([]);

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  //creating All filter
  function addX(arr) {
    let n = arr.length;
    let i = 0;
    const newarr = new Array(n + 1).fill(null);
    // insert the elements from
    // the old array into the new array
    // insert all elements till n
    // then insert x at n+1
    for (i = 0; i < n; i++) newarr[i + 1] = arr[i];
    newarr[0] = "All";
    return newarr;
  }

  // get date data
  let dateArray = Data.map((x) => (x = x.Date));

  function handleChange(e) {
    setClick(1);
    setDate(1);

    console.log("sent");
    console.log(sent);
    console.log("date");
    console.log(date);
    console.log("cat");
    console.log(cat);
    // if (sent === 0) { var filterSentiment1 = "All";  }
    // if (cat === 0) { var filterCategory11 = "All";  }

    let filterArray1 = Data.filter((item) => item.Date !== e.target.value);

    if (e.target.value === "All") {
      filterArray1 = Data.filter((item) => item.Date !== e.target.value);
    } else {
      filterArray1 = Data.filter((item) => item.Date === e.target.value);
    }
    console.log("filterDate1");
    console.log(filterDate1);
    console.log("filterSentiment1");
    console.log(filterSentiment1);
    console.log("filterCategory11");
    console.log(filterCategory11);
    let filterArray2 = filterArray1.filter(
      (filterArray1) => filterArray1._sentiment_ !== filterSentiment1
    );

    if (filterSentiment1 === "All" || sent === 0) {
      filterArray2 = filterArray1.filter(
        (filterArray1) => filterArray1._sentiment_ !== filterSentiment1
      );
    } else {
      filterArray2 = filterArray1.filter(
        (filterArray1) => filterArray1._sentiment_ === filterSentiment1
      );
    }
    let filterArray = filterArray2.filter(
      (filterArray2) => filterArray2._Category_1 !== filterCategory11
    );

    if (filterCategory11 === "All" || cat === 0) {
      filterArray = filterArray2.filter(
        (filterArray2) => filterArray2._Category_1 !== filterCategory11
      );
    } else {
      filterArray = filterArray2.filter(
        (filterArray2) => filterArray2._Category_1 === filterCategory11
      );
    }

    console.log(filterArray);

    setDateFilterArray([...filterArray]);
    filterDate1 = setFilterDate1(e.target.value);

    console.log(filterArray);

    console.log(filterSentiment1);
  }
  var uniqueDateArray = dateArray.filter(onlyUnique);
  // call the method to add x in arr

  uniqueDateArray.sort(function (a, b) {
    return a.localeCompare(b); //using String.prototype.localCompare()
  });

  uniqueDateArray = addX(uniqueDateArray);

  // get sentiment data
  let sentimentArray = Data.map((x) => (x = x._sentiment_));

  function handleSentimentChange(e) {
    setClick(1);
    setSent(1);

    console.log("sent");
    console.log(sent);
    console.log("date");
    console.log(date);
    console.log("cat");
    console.log(cat);

    // if (date === 0) {  var filterDate1 = "All";  }
    // if (cat === 0) { var filterCategory11 = "All";  }

    let senfilterArray1 = Data.filter(
      (item) => item._sentiment_ !== e.target.value
    );
    if (e.target.value === "All") {
      senfilterArray1 = Data.filter(
        (item) => item._sentiment_ !== e.target.value
      );
    } else {
      senfilterArray1 = Data.filter(
        (item) => item._sentiment_ === e.target.value
      );
    }

    console.log("filterDate1");
    console.log(filterDate1);
    console.log("filterSentiment1");
    console.log(filterSentiment1);
    console.log("filterCategory11");
    console.log(filterCategory11);

    let senfilterArray2 = senfilterArray1.filter(
      (senfilterArray1) => senfilterArray1.Date !== filterDate1
    );

    if (filterDate1 === "All" || date === 0) {
      senfilterArray2 = senfilterArray1.filter(
        (senfilterArray1) => senfilterArray1.Date !== filterDate1
      );
    } else {
      senfilterArray2 = senfilterArray1.filter(
        (senfilterArray1) => senfilterArray1.Date === filterDate1
      );
    }

    let senfilterArray = senfilterArray2.filter(
      (senfilterArray2) => senfilterArray2._Category_1 !== filterCategory11
    );

    if (filterCategory11 === "All" || cat === 0) {
      senfilterArray = senfilterArray2.filter(
        (senfilterArray2) => senfilterArray2._Category_1 !== filterCategory11
      );
    } else {
      senfilterArray = senfilterArray2.filter(
        (senfilterArray2) => senfilterArray2._Category_1 === filterCategory11
      );
    }

    setDateFilterArray([...senfilterArray]);
    setFilterSentiment1(e.target.value);
    // filterDate1 = setFilterSentiment1(e.target.value);
    // if (senfilterArray.length === 0) {
    //   setFilterSentiment(false);
    //   console.log(senfilterArray.length);
    // }
    // else {
    //   setFilterSentiment(true);
    //   console.log(senfilterArray.length);
    // }

    // setFilterSentiment(true);
    console.log(e.target.value);
    console.log(filterCategory11);
    console.log(filterDate1);

    console.log(senfilterArray);
  }
  var uniqueSentimentArray = sentimentArray.filter(onlyUnique);
  // call the method to add x in arr
  uniqueSentimentArray = addX(uniqueSentimentArray);

  uniqueSentimentArray.sort(function (a, b) {
    return a.localeCompare(b); //using String.prototype.localCompare()
  });

  // get _Category_1 data
  let category1Array = Data.map((x) => (x = x._Category_1));

  function handleCategory1Change(e) {
    setClick(1);
    setCat(1);

    console.log("sent");
    console.log(sent);
    console.log("date");
    console.log(date);
    console.log("cat");
    console.log(cat);

    // if (date === 0) { var filterDate1 = "All";  }
    // if (sent === 0) { var filterSentiment1 = "All";  }

    let cat1filterArray1 = Data.filter(
      (item) => item._Category_1 !== e.target.value
    );
    if (e.target.value === "All") {
      cat1filterArray1 = Data.filter(
        (item) => item._Category_1 !== e.target.value
      );
    } else {
      cat1filterArray1 = Data.filter(
        (item) => item._Category_1 === e.target.value
      );
    }

    console.log("cat1filterArray1");
    console.log(cat1filterArray1);

    console.log("filterDate1");
    console.log(filterDate1);
    console.log("filterSentiment1");
    console.log(filterSentiment1);
    console.log("filterCategory11");
    console.log(filterCategory11);
    let cat1filterArray2 = cat1filterArray1.filter(
      (cat1filterArray1) => cat1filterArray1.Date !== filterDate1
    );

    if (filterDate1 === "All" || date === 0) {
      cat1filterArray2 = cat1filterArray1.filter(
        (cat1filterArray1) => cat1filterArray1.Date !== filterDate1
      );
    } else {
      cat1filterArray2 = cat1filterArray1.filter(
        (cat1filterArray1) => cat1filterArray1.Date === filterDate1
      );
    }

    console.log("cat1filterArray2");
    console.log(cat1filterArray2);

    let cat1filterArray = cat1filterArray2.filter(
      (cat1filterArray2) => cat1filterArray2._sentiment_ === filterSentiment1
    );

    //  console.log("cat1filterArray");
    //  console.log(cat1filterArray);

    if (filterSentiment1 === "All" || sent === 0) {
      cat1filterArray = cat1filterArray2.filter(
        (cat1filterArray2) => cat1filterArray2._sentiment_ !== filterSentiment1
      );
    } else {
      cat1filterArray = cat1filterArray2.filter(
        (cat1filterArray2) => cat1filterArray2._sentiment_ === filterSentiment1
      );
    }
    console.log("cat1filterArray");
    console.log(cat1filterArray);
    // setCategory1FilterArray([...cat1filterArray]);
    setDateFilterArray([...cat1filterArray]);

    // if (cat1filterArray.length === 0) {
    //   setFilterCategory1(false);
    // }
    // else {
    //   setFilterCategory1(true);
    // }
    // setFilterCategory1(true);
    setFilterCategory11(e.target.value);
    console.log(e);
    console.log(cat1filterArray);
    console.log(click);
  }
  var uniqueCategory1Array = category1Array.filter(onlyUnique);
  // call the method to add x in arr
  uniqueCategory1Array = addX(uniqueCategory1Array);
  // uniqueCategory1Array.sort((a, b) => a.firstname.localeCompare(b.firstname))

  uniqueCategory1Array.sort(function (a, b) {
    return a.localeCompare(b); //using String.prototype.localCompare()
  });

  return (
    <div>
      <div>
        <label for="date">Choose a date:</label>
        <select name="date" id="date" onChange={(e) => handleChange(e)}>
          {uniqueDateArray.map((x) => (
            <option value={x}>{x}</option>
          ))}
        </select>

        <label for="sentiment">Choose a sentiment:</label>
        <select
          name="sentiment"
          id="sentiment"
          onChange={(e) => handleSentimentChange(e)}
        >
          {uniqueSentimentArray.map((x) => (
            <option value={x}>{x}</option>
          ))}
        </select>

        <label for="category1">Choose a category:</label>
        <select
          name="category1"
          id="category1"
          onChange={(e) => handleCategory1Change(e)}
        >
          {uniqueCategory1Array.map((x) => (
            <option value={x}>{x}</option>
          ))}
        </select>
      </div>
      <header>
        <h1 className="news_paper_title">The Times of India</h1>
      </header>
      {/* <div className="next"> */}
      {click === 0 ? (
        <div className="newBox">
          {Data?.map((x) => (
            <NewsTab data={x} />
          ))}
        </div>
      ) : dateFilterArray.length > 0 ? (
        <div className="newBox">
          {dateFilterArray?.map((x) => (
            <NewsTab data={x} />
          ))}
        </div>
      ) : (
        <div className="newBox">
          {/* <h1>min-height: 100vh; </h1> */}
            <h2>No News Found</h2>
          {arrayData.map((x) => (
            <NewsTab data={x} />
          ))}
        </div>
      )}
    </div>
    // </div>
  );
}
export default App;
