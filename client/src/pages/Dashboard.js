import React, { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { searchAtom, filterStatus } from "../utils/Atoms"
import API from "../utils/API"

import { AddNew } from "../components/Buttons";
import SideBar from "../components/SideBar/SideBar";
import ResultsTable from "../components/DashboardContent/ResultsTable";
// import dummyDB from "../content/dummyDBresults.json";
// import API from "../utils/API"

function Dashboard() {

  const [statusState] = useAtom(filterStatus);

  const [searchInput] = useAtom(searchAtom);
  // const [searchInput, setSearchInput] = useState("")
  const [appsData, setAppsData] = useState([])


  useEffect(() => {
    loadApps()
  }, []);

  function loadApps() {
    API.getApps()
      .then(res => {
        console.log(res.data)
        setAppsData(res.data)
      })
      .catch(err => console.log(err));
  };

  // // Search Form functions
  // function handleFormSubmit(event) {
  //   event.preventDefault();
  // }

  // function handleInputChange(event) {
  //   const input = event.target.value;
  //   console.log(input)
  //   setSearchInput(input)
  // }



  return (
    <div>
      <SideBar />
      {/* <SideBar /> */}
      <div className="container-fluid py-5 mainContainer">
        <div className="text-center">
          <a href="/new"><AddNew /></a>
        </div>
        <ResultsTable search={searchInput} data={appsData} id={appsData._id} date={appsData.date} title={appsData.title} company={appsData.company} location={appsData.location} />
      </div>
    </div >
  );
}


export default Dashboard;
