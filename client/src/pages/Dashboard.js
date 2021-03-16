import React, { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { applications } from "../utils/Atoms"
import API from "../utils/API"

import { AddNew } from "../components/Buttons";
import SideBar from "../components/SideBar/SideBar";
import ResultsTable from "../components/DashboardContent/ResultsTable";
import dummyDB from "../content/dummyDBresults.json";
// import API from "../utils/API"

function Dashboard() {

  // const [appsData, setAppsData] = useAtom(applications);
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



  return (
    <div>
      <SideBar />
      <div className="container-fluid py-5 mainContainer">
        <div className="text-center">
          <a href="/new"><AddNew /></a>
        </div>
        <ResultsTable data={appsData} id={appsData._id} date={appsData.date} title={appsData.title} comapny={appsData.company} location={appsData.location} />
        {/* <ResultsTable data={dummyDB} id={dummyDB.id} date={dummyDB.date} title={dummyDB.title} comapny={dummyDB.company} location={dummyDB.location} /> */}
      </div>
    </div >
  );
}


export default Dashboard;
