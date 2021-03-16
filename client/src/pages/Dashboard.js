import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useAtom } from "jotai";
import { searchAtom, filterStatus, filterValue } from "../utils/Atoms"
import API from "../utils/API"

import { AddNew } from "../components/Buttons";
import SideBar from "../components/SideBar/SideBar";
import ResultsTable from "../components/DashboardContent/ResultsTable";
// import dummyDB from "../content/dummyDBresults.json";
// import API from "../utils/API"

function Dashboard() {


  const [searchInput] = useAtom(searchAtom);
  const [statusFilter] = useAtom(filterValue);
  const [appsData, setAppsData] = useState([])


  useEffect(() => {
    loadApps()
  }, []);

  function loadApps() {
    API.getApps()
      .then(res => {
        setAppsData(res.data)
      })
      .catch(err => console.log(err));
  };

  function deleteOne(id) {
    console.log("DELETE CLICKED")
    API.deleteBook(id)
      .then(res => loadApps())
      .catch(err => console.log(err));
  }

  return (
    <div>
      <SideBar />
      {/* <SideBar /> */}
      <div className="container-fluid py-5 mainContainer">
        <div className="text-center">
          <Link to={"/new"}><AddNew /></Link>
        </div>
        <ResultsTable search={searchInput} statusFilter={statusFilter} data={appsData} id={appsData._id} date={appsData.date} title={appsData.title} company={appsData.company} location={appsData.location} deleteLog={deleteOne} />
      </div>
    </div >
  );
}


export default Dashboard;
